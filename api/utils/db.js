const mongoose = require('mongoose');

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error(
      'MONGODB_URI is not defined. Please set it in your Vercel Environment Variables or .env.local file.'
    );
  }

  // Mongoose 9.x removed useNewUrlParser and useUnifiedTopology — do NOT pass them
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 10000,
  });

  isConnected = db.connections[0].readyState === 1;
  console.log('=> New database connection established');
}

module.exports = connectToDatabase;
