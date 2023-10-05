const express = require('express');

const router = express.Router();
const { listAllExpenses, createExpense } = require('../controllers/expenses');

router.get('/:userId', listAllExpenses);

router.post('/:userId', createExpense);

module.exports = router;
