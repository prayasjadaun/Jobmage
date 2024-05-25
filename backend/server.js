const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

// Connecting to MongoDB
mongoose
  .connect('mongodb+srv://mebhikhelega:HfejPa2HjeFwdBpD@cluster0.0sftqn0.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// User model
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
  role: String,
});

// Job model
const Job = mongoose.model('Job', {
  title: String,
  company: String,
  location: String,
  type: String,
  status: String,
  postedOn: String,
  description: String,
  apply: String,
});

// Secret key for JWT
const secretKey = 'HfejPa2HjeFwdBpD';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  }
  return next();
};

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    if (user.role !== role) {
      return res.status(401).json({ error: 'Invalid role' });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey);
    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create job route
app.post('/api/jobs', verifyToken, async (req, res) => {
  try {
    const { title, company, location, type, status, postedOn, description, apply } = req.body;
    const newJob = new Job({ title, company, location, type, status, postedOn, description, apply });
    await newJob.save();
    res.status(201).json({ message: 'Job created', jobId: newJob._id }); // Return the ID of the newly created job
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Get all jobs route
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get job by ID route
app.get('/api/jobs/:jobId', async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Assuming you already have a User model defined
// Add the following routes to your server

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a user
app.delete('/api/users/:userId', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Change user role
app.patch('/api/users/:userId', async (req, res) => {
  try {
    const { role } = req.body;
    await User.findByIdAndUpdate(req.params.userId, { role });
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Backend route to get the username and role for a user ID
// app.get('/api/user/:userId', verifyToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     res.json({ username: user.username, role: user.role });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// User profile route
app.get('/api/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ username: user.username, email: user.email, role: user.role });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Protected routes
const protectedRoute = require('./routes/protectedRoute');
app.use('/api/protected', verifyToken, protectedRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
