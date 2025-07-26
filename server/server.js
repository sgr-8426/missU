const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session')

dotenv.config();
const app = express();

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173", // Your frontend URL
  credentials: true               // Allow cookies
}));
app.use("/images", express.static("images"));
app.use(session({
  secret: "abc123", // use a strong secret in production
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 hour
    sameSite: "Lax",        // or "Strict"/"None"
    secure: false           // set to true if using HTTPS
  }
}));

const authRoutes = require("./routes/auth")
app.use("/api/auth", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/missU")
.then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.listen(5000, () => console.log(`Server running on port 5000`));