const connectToDatabase = require('./utils/db');
const User = require('./models/User');
const allowCors = require('./utils/cors');

const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    const { adminSecret } = req.body;

    // Read secret from environment variable — NEVER hardcode it
    const expectedSecret = process.env.ADMIN_SECRET;
    if (!expectedSecret) {
      return res.status(500).json({ success: false, message: 'Admin secret is not configured on the server.' });
    }
    if (adminSecret !== expectedSecret) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    await connectToDatabase();

    // Aggregate metrics
    const totalUsers = await User.countDocuments();
    const completedQuizzes = await User.countDocuments({ 'quizData.completedAt': { $exists: true } });

    const allUsers = await User.find({}, 'globalPoints orders createdAt');
    let totalPointsDist = 0;
    let totalOrders = 0;

    // Track daily sign-ups for the last 7 days
    const now = new Date();
    const dailySignups = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(now);
      d.setDate(d.getDate() - (6 - i));
      return { date: d.toISOString().slice(0, 10), count: 0 };
    });

    allUsers.forEach(user => {
      totalPointsDist += user.globalPoints;
      totalOrders += user.orders.length;

      // Bin signup into daily buckets
      if (user.createdAt) {
        const dateStr = user.createdAt.toISOString().slice(0, 10);
        const bucket = dailySignups.find(b => b.date === dateStr);
        if (bucket) bucket.count++;
      }
    });

    // Recent orders list (last 10)
    const recentOrderUsers = await User.find(
      { 'orders.0': { $exists: true } },
      'sessionId orders'
    ).sort({ 'orders.redeemedAt': -1 }).limit(10);

    const recentOrders = [];
    recentOrderUsers.forEach(u => {
      u.orders.forEach(o => {
        recentOrders.push({
          sessionId: u.sessionId.slice(0, 8) + '…', // Anonymized
          item: o.item,
          status: o.status,
          redeemedAt: o.redeemedAt,
        });
      });
    });
    recentOrders.sort((a, b) => new Date(b.redeemedAt) - new Date(a.redeemedAt));

    return res.status(200).json({
      success: true,
      metrics: {
        totalUsers,
        completedQuizzes,
        totalPointsDist,
        totalOrders,
        dailySignups,
        recentOrders: recentOrders.slice(0, 10),
      }
    });
  } catch (error) {
    console.error('Admin endpoint error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = allowCors(handler);
