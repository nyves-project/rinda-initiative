const connectToDatabase = require('./utils/db');
const User = require('./models/User');
const allowCors = require('./utils/cors');

const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    await connectToDatabase();
    const { sessionId, cost, item } = req.body;

    if (!sessionId || !cost || !item) {
      return res.status(400).json({ success: false, message: 'Missing parameters' });
    }

    const user = await User.findOne({ sessionId });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.globalPoints < cost) {
      return res.status(400).json({ success: false, message: 'Insufficient points' });
    }

    // Deduct points and log order
    user.globalPoints -= cost;
    user.orders.push({ item, redeemedAt: new Date() });
    await user.save();

    return res.status(200).json({ success: true, newTotal: user.globalPoints, message: 'Redemption successful' });
  } catch (error) {
    console.error('Rewards endpoint error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = allowCors(handler);
