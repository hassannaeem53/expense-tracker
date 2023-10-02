// src/App.js
import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store
import Dashboard from './components/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
