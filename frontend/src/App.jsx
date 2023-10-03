// src/App.js
import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
