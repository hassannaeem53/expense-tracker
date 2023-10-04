const express = require('express');
const expenses = require('../routes/expense');
const users = require('../routes/user');
const auth = require('../routes/auth');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/expenses', expenses);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
};
