const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  expenseType: String,
  createdAt: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
