const { promisify } = require("util");
const user = require("./../models/User");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
const ExpressError = require("./../utils/ExpressError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const cookieOptions = {
  expires: new Date(
    Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  ),
  httpOnly: true,
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "Success",
    token,
    data: { user },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await user.create({ ...req.body });

  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ExpressError(`Please provide email and password`, 400));
  }

  const userLogin = await user.findOne({ email }).select("+password");

  // console.log(userLogin);

  if (
    !userLogin ||
    !(await userLogin.correctPassword(password, userLogin.password))
  ) {
    return next(new ExpressError(`Incorrect email or password`, 401));
  }

  createSendToken(userLogin, 200, res);
});
