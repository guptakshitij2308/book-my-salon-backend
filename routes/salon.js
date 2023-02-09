const express = require('express');
const salon = require('../models/salon');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

router.post('/', catchAsync(async (req, res) => {
    const newSalon = new salon(req.body);
    const savedSalon = await newSalon.save();
    res.status(200).json(savedSalon)
}));

router.put('/:id', catchAsync(async (req, res) => {
    const updatedSalon = await salon.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedSalon)
}));

router.delete('/:id', catchAsync(async (req, res) => {
    await salon.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel is deleted")
}));

router.get('/:id', catchAsync(async (req, res) => {
    const Salon = await salon.findById(req.params.id);
    res.status(200).json(Salon);
}));

router.get('/', catchAsync(async (req, res) => {
    const Salons = await salon.find();
    res.status(200).json(Salons);
}));

module.exports = router;