const express = require('express');
const { registerUser, loginUser, getUserProfile, logoutUser } = require('../controllers/userControllers'); // Ruta corregida
const { protect } = require('../middleware/authmiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUserProfile);
router.post('/logout', protect, logoutUser);

module.exports = router;
