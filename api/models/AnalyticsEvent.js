const mongoose = require('mongoose');

const AnalyticsEventSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    index: true,
  },
  event: {
    type: String,
    required: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  timestamp: {
    type: Date,
    default: Date.now,
    index: true,
  },
  // Derived from the page path for quick filtering
  page: {
    type: String,
  },
});

// TTL: auto-delete events older than 90 days to control DB size
AnalyticsEventSchema.index({ timestamp: 1 }, { expireAfterSeconds: 60 * 60 * 24 * 90 });

module.exports =
  mongoose.models.AnalyticsEvent ||
  mongoose.model('AnalyticsEvent', AnalyticsEventSchema);
