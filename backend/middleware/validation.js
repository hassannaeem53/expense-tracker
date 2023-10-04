const Joi = require('joi');
const httpStatus = require('http-status-codes');

const validateAuth = (req, res, next) => {
  const requestAuthSchema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required()
      .error((err) => {
        err[0].message = 'Please enter a valid email address';
        return err;
      }),
    password: Joi.string().required(),
  });

  const { error } = requestAuthSchema.validate(req.body);

  if (error) {
    return res
      .status(httpStatus.StatusCodes.BAD_REQUEST)
      .json({ error: error.details[0].message });
  }

  return next();
};

const validateUser = (req, res, next) => {
  const requestUserSchema = Joi.object().keys({
    name: Joi.string().required().min(3).max(255),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(1000),
  });

  const { error } = requestUserSchema.validate(req.body);

  if (error) {
    return res
      .status(httpStatus.StatusCodes.BAD_REQUEST)
      .json({ error: error.details[0].message });
  }
  return next();
};

module.exports = {
  validateAuth,
  validateUser,
};
