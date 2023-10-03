// src/components/AddExpense.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/reducers/expenseSlice'; // Import the addExpense action

const AddExpense = () => {
  const [expense, setExpense] = useState('');
  const dispatch = useDispatch();

  const handleAddExpense = () => {
    if (expense.trim() !== '') {
      // Dispatch the addExpense action with the expense payload
      dispatch(addExpense(expense));
      setExpense('');
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <input
        type="text"
        placeholder="Expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpense;

// // src/components/ExpenseList.js
// import React from 'react';
// import { useSelector } from 'react-redux';

// const ExpenseList = () => {
//   // Use useSelector to access the expenses array from Redux state
//   const expenses = useSelector((state) => state.expenses?.expenses);
//   console.log(expenses);

//   return (
//     <div>
//       <h2>Expense List</h2>
//       <ul>
//         {expenses &&
//           expenses.map((expense, index) => <li key={index}>{expense}</li>)}
//       </ul>
//     </div>
//   );
// };

// export default ExpenseList;

// // src/App.js
// import React from 'react';
// import { Provider } from 'react-redux'; // Import Provider
// import store from './redux/store'; // Import your Redux store
// import AddExpense from './components/AddExpense'; // Import the AddExpense component
// import ExpenseList from './components/ExpenseList'; // Import the ExpenseList component

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <h1>Expense Tracker</h1>
//         <AddExpense />
//         <ExpenseList />
//       </div>
//     </Provider>
//   );
// }

// export default App;
