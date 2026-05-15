const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

// Serve frontend build if available
const buildPath = path.join(__dirname, "..", "Frontend", "build");
app.use(express.static(buildPath));
app.use((req, res) => {
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ message: "API route not found" });
  }
  res.sendFile(path.join(buildPath, "index.html"));
});

// DB Connection
const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ramdhan";
const mongooseOptions = {
  retryWrites: true,
  w: "majority",
};

if (uri.startsWith("mongodb+srv://")) {
  mongooseOptions.ssl = true;
}

mongoose.connect(uri, mongooseOptions)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
