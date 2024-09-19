const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerUser, loginUser } = require('../controllers/authController');

// Register new user
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

module.exports = router;
