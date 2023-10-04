const _ = require('lodash');
const bcrypt = require('bcrypt');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const mongoose = require('mongoose');
const User = require('../db/models/user');
const generateAuthToken = require('../utils/auth');

const { ObjectId } = mongoose.Types;

async function registerUser(req, res) {
  const newUser = _.pick(req.body, ['email', 'name', 'password']);

  const user = await User.find({ email: newUser.email });
  if (user.length === 0) {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(newUser.password, salt);
    // newUser.password = hashedPassword;
    const createdUser = await User.create(newUser);
    const resUser = _.pick(createdUser, ['email', 'name', '_id']);
    const token = generateAuthToken(resUser);
    return res.header('x-auth-token', token).send({ user: resUser, token });
  }
  return res.status(StatusCodes.CONFLICT).send({
    message: 'This user already exists',
    reason: ReasonPhrases.CONFLICT,
  });
}

async function getCurrentUser(req, res) {
  const requiredUserId = new ObjectId(req.user.id);
  const user = await User.find({ _id: requiredUserId });
  // dont send password
  const resUser = _.pick(user[0], ['email', 'name', '_id', 'created_At']);
  res.status(StatusCodes.OK).send(resUser);
}

module.exports.registerUser = registerUser;
module.exports.getCurrentUser = getCurrentUser;
