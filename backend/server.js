const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://mebhikhelega:HfejPa2HjeFwdBpD@cluster0.0sftqn0.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// User model
const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
  role: String,
});

// Secret key for JWT
const secretKey = "HfejPa2HjeFwdBpD";

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "A token is required for authentication" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }

  return next();
};

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    if (user.role !== role) {
      return res.status(401).json({ error: "Invalid role" });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Backend route to get the username for a user ID
app.get('/api/username/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ username: user.username });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Protected routes
const protectedRoute = require('./routes/protectedRoute');
app.use('/api/protected', verifyToken, protectedRoute);

app.use(cors({ origin: "http://localhost:5173" }));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));