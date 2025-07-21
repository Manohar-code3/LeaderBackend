const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Get all users (sorted by points for leaderboard)
router.get('/users', async (req, res) => {
  const users = await User.find().sort({ points: -1 });
  res.json(users);
});

// Add a user
router.post('/users', async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
});

// Claim random points
router.post('/users/:id/claim', async (req, res) => {
  const randomPoints = Math.floor(Math.random() * 10) + 1;
  const user = await User.findByIdAndUpdate(req.params.id, { $inc: { points: randomPoints } }, { new: true });
  const history = new ClaimHistory({ userId: user._id, pointsClaimed: randomPoints });
  await history.save();
  res.json({ user, randomPoints });
});

// Get claim history for all users
router.get('/history', async (req, res) => {
  const history = await ClaimHistory.find().populate('userId').sort({ claimedAt: -1 });
  res.json(history);
});

module.exports = router;
