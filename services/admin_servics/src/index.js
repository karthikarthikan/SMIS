import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router';
import sequelize from './models/index.js';

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3001', // Allow requests from React frontend
  credentials: true,
}));

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/admin', router);

// Debug: Check DB_USER environment variable
console.log("DB_USER:", process.env.DB_USER);

// Start server
const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  try {
    await sequelize.sync(); // Optional: sync tables with DB
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  } catch (err) {
    console.error('❌ Server failed to start:', err);
  }
});
