const express = require('express');

// const dbConfig = config.get('database');
// eslint-disable-next-line import/no-dynamic-require
const { loginUser } = require('../controllers/auth');
const { validateAuth } = require('../middleware/validation');

const router = express.Router();

// router.post('/login', validateAuth, loginUser);
router.post('/login', validateAuth, loginUser);

module.exports = router;
