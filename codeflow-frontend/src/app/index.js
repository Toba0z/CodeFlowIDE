const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const { PORT, JWT_SECRET } = process.env;

// Middleware
app.use(cors());
app.use(express.json());

// JWT Token Verification Middleware
function checkToken(req, res, next) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(403).send("No token provided");
  }

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
}

// Mock Data for Users
const users = [
  { id: 1, name: "Neo", email: "neo@example.com", password: "catnip", avatar: "🐱" },
  { id: 2, name: "Mina", email: "mina@example.com", password: "beans", avatar: "😸" },
];

// Routes
app.get("/", (req, res) => res.send("Welcome to my API server"));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Please provide an email and password");
  }

  const foundUser = users.find(user => user.email === email && user.password === password);
  if (!foundUser) {
    return res.status(401).send("Invalid credentials");
  }

  const token = jwt.sign({ id: foundUser.id, name: foundUser.name, avatar: foundUser.avatar }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: "Login successful", token });
});

app.get("/user-profile", checkToken, (req, res) => {
  if (req.user) {
    // Remove sensitive data like password before sending user info
    const { password, ...userWithoutPassword } = users.find(user => user.id === req.user.id);
    res.json({ user: userWithoutPassword });
  } else {
    res.status(404).send("User not found");
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
