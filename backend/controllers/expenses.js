const httpStatus = require('http-status-codes');
const Expense = require('../db/models/expense');

async function listAllExpenses(req, res) {
  try {
    const expenses = await Expense.find({ userId: req.params.userId });
    res.json(expenses);
  } catch (error) {
    res
      .status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
}

async function createExpense(req, res) {
  const expense = new Expense({
    title: req.body.title,
    amount: req.body.amount,
    expenseType: req.body.expenseType,
    userId: req.params.userId,
  });

  try {
    const newExpense = await expense.save();
    res.status(httpStatus.StatusCodes.CREATED).json(newExpense);
  } catch (error) {
    res
      .status(httpStatus.StatusCodes.BAD_REQUEST)
      .json({ message: error.message });
  }
}

module.exports = {
  listAllExpenses,
  createExpense,
};
