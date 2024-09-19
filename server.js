const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Middleware
app.use(cors());
app.use(express.json());

// Auth Routes (separate file for modularity)
app.use('/api/auth', authRoutes);

// Start the server on a configurable port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
