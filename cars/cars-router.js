const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars")

    res.json(cars)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const payload = {
      vin: req.body.vin,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
    };
    const [carID] = await db.insert(payload).into("cars")
    const car = await db.first("*").from("cars").where("id", carID)
    res.json(201).json(car)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
