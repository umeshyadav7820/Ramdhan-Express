const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  ssl: true,
  retryWrites: true,
  w: 'majority'
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(5000, () => console.log("Server running on port 5000"));