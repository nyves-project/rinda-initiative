const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  globalPoints: {
    type: Number,
    default: 0,
  },
  quizData: {
    highScore: { type: Number, default: 0 },
    completedAt: { type: Date },
  },
  menstrualData: {
    lastPeriodStart: { type: Date },
    cycleLength: { type: Number, default: 28 },
    periodDuration: { type: Number, default: 5 },
  },
  orders: [{
    item: { type: String },
    redeemedAt: { type: Date, default: Date.now },
    status: { type: String, default: 'pending' }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
