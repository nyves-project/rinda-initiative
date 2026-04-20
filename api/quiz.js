const connectToDatabase = require('./utils/db');
const User = require('./models/User');
const allowCors = require('./utils/cors');

const MAX_POINTS_PER_QUIZ = 50; // Server-side cap to prevent abuse
const MIN_POINTS = 1;

const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    await connectToDatabase();
    const { sessionId, points: rawPoints = 15, score } = req.body;

    if (!sessionId) {
      return res.status(400).json({ success: false, message: 'Missing session ID' });
    }

    // Validate and cap points — prevent client-side inflation
    const points = Math.max(MIN_POINTS, Math.min(MAX_POINTS_PER_QUIZ, parseInt(rawPoints) || 15));

    const user = await User.findOne({ sessionId });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.globalPoints += points;
    user.quizData.completedAt = new Date();

    // Update high score if a numeric score was provided
    if (typeof score === 'number' && score > (user.quizData.highScore || 0)) {
      user.quizData.highScore = score;
    }

    await user.save();

    return res.status(200).json({ success: true, newTotal: user.globalPoints });
  } catch (error) {
    console.error('Quiz endpoint error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = allowCors(handler);
