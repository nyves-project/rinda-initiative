const { v4: uuidv4 } = require('uuid');
const connectToDatabase = require('./utils/db');
const User = require('./models/User');

const allowCors = require('./utils/cors');

const handler = async (req, res) => {
  try {
    await connectToDatabase();

    const { sessionId } = req.body;

    if (!sessionId) {
      // Create new anonymous user
      const newSessionId = uuidv4();
      const user = new User({ sessionId: newSessionId });
      await user.save();
      return res.status(200).json({ success: true, sessionId: newSessionId, user });
    } else {
      // Lookup existing user
      let user = await User.findOne({ sessionId });
      if (!user) {
        // If they send a session ID that doesn't exist, create it for them
        user = new User({ sessionId });
        await user.save();
      }
      return res.status(200).json({ success: true, sessionId, user });
    }
  } catch (error) {
    console.error('Auth endpoint error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = allowCors(handler);
