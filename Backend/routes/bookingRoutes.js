const express = require("express");
const Booking = require("../models/Booking");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE BOOKING (Protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const booking = new Booking({
      ...req.body,
      userId: req.user.id,
    });
    await booking.save();

    res.json({ message: "Booking created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error creating booking", error: err.message });
  }
});

// GET ALL BOOKINGS
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings", error: err.message });
  }
});

module.exports = router;