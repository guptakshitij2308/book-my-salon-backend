const user = require("./../models/User");
const catchAsync = require("./../utils/catchAsync");
const ExpressError = require("./../utils/ExpressError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await user.find();
  res.status(200).json({
    status: "Success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await user.create(req.body);
  res.status(201).json({
    status: "Success",
    data: {
      newUser,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const userFind = await user.findById({ _id: req.params.id });
  res.status(200).json({
    status: "Success",
    data: {
      userFind,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  await user.findByIdAndDelete({ _id: req.params.id });
  res.status(204).json({
    status: "Success",
    data: null,
  });
});
