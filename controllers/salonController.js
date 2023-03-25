const salon = require("../models/Salon");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

exports.getAllSalons = catchAsync(async (req, res) => {
  const Salons = await salon.find();
  res.status(200).json(Salons);
});

exports.createNewSalon = catchAsync(async (req, res) => {
  const newSalon = new salon(req.body);
  const savedSalon = await newSalon.save();
  res.status(200).json(savedSalon);
});

exports.findSalon = catchAsync(async (req, res) => {
  const Salon = await salon.findById(req.params.id);
  res.status(200).json(Salon);
});

exports.deleteSalon = catchAsync(async (req, res) => {
  await salon.findByIdAndDelete(req.params.id);
  res.status(200).json("Salon is deleted");
});

exports.updateSalon = catchAsync(async (req, res) => {
  const updatedSalon = await salon.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(updatedSalon);
});
