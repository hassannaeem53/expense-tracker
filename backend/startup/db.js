const mongoose = require('mongoose');
// const config = require('config');

// const dbConfig = config.get('database.mongodb');

// eslint-disable-next-line func-names
module.exports = function () {
  mongoose
    .connect('mongodb://localhost:27017/expense-tracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};
