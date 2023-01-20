const express = require('express');
router = express.Router();

const { register } = require('./controllers/user/register');

// Hustlebuddies
router.post('/register', register);

module.exports = router;