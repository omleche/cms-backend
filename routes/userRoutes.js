const express = require('express');
const { getMe, updateMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.put(
  '/me',
  protect,
  [
    body('name').optional().notEmpty(),
    body('email').optional().isEmail().withMessage('Enter a valid email'),
  ],
  validateRequest,
  updateUserProfile
);


module.exports = router;
