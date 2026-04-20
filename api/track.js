const connectToDatabase = require('./utils/db');
const AnalyticsEvent = require('./models/AnalyticsEvent');
const allowCors = require('./utils/cors');

const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    const { sessionId, event, data } = req.body;

    if (!event || typeof event !== 'string') {
      return res.status(400).json({ success: false, message: 'Missing event name' });
    }

    await connectToDatabase();

    // Extract page from data.path if provided, for quick DB filtering
    const page = data?.path || null;

    await AnalyticsEvent.create({
      sessionId: sessionId || 'anonymous',
      event: event.slice(0, 100), // Truncate to prevent oversized payloads
      data: data || {},
      page,
      timestamp: new Date(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    // Analytics failure is non-critical — still return 200 so the user flow is not disrupted
    console.error('Analytics endpoint error:', error);
    return res.status(200).json({ success: true });
  }
};

module.exports = allowCors(handler);
