const express = require('express');
const router = express.Router();

router.get('/after', (req, res) => {
  // Access the user data from the decoded token
  const user = req.user;

  // Return the user data or any data you want to send to the client
  res.json({ user });
});

module.exports = router;