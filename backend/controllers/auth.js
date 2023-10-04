const _ = require('lodash');
const bcrypt = require('bcrypt');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const User = require('../db/models/user');
const generateAuthToken = require('../utils/auth');

async function loginUser(req, res) {
  const newUser = _.pick(req.body, ['email', 'password']);
  const user = await User.findOne({
    email: { $regex: new RegExp(newUser.email) },
  });
  if (user) {
    // const validPassword = await bcrypt.compare(newUser.password, user.password);

    const validPassword = newUser.password == user.password;
    if (!validPassword) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        error: 'Invalid email or password',
        reason: ReasonPhrases.BAD_REQUEST,
      });
    }
    const token = generateAuthToken(user);
    return res.status(StatusCodes.OK).send(token);
  }
  return res.status(StatusCodes.BAD_REQUEST).send({
    error: 'Invalid email or password',
    reason: ReasonPhrases.BAD_REQUEST,
  });
}

exports.loginUser = loginUser;
