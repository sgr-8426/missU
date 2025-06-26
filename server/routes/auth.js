const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user");
const upload = require("../utils/upload")
const session = require("express-session");

const JWT_SECRET = "abc123";

// Signup Route
router.post("/signup", upload.single("profile"), async (req, res) => {
  const { email, username, password } = req.body;
  try {
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) return res.status(400).json({ message: "User already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const profilePic = req.file ? `images/${req.file.filename}` : "";
      
      const user = await User.create({
        email,
        username,
        password: hashedPassword,
        profilePicture: profilePic,
      });

      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid email or password" });

    const time = "1h"
    if (req.body.remember) {
      time = "30d";
      let token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: time });
      res.status(200).cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: 2592000000, // 1 hour or 30 days in milliseconds
    });
  }else{
    let token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: time })
    req.session.jwt = token;
    res.status(200)
  }

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;