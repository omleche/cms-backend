const express = require('express');
const {
  getAllTeam,
  getTeamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require('../controllers/teamController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { body } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');
const upload = require('../middleware/uploadMiddleware'); // assuming you're storing images locally

const router = express.Router();

//  Public routes
router.get('/', getAllTeam);
router.get('/:id', getTeamMember);

// Protected + validated routes
router.post(
  '/',
  protect,
  authorizeRoles('admin'), // authorization comes BEFORE controller
  upload.single('image'),  // upload AFTER protect
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('bio').trim().isLength({ min: 10 }).withMessage('Bio must be at least 10 characters'),
  ],
  validateRequest,
  createTeamMember
);

router.put(
  '/:id',
  protect,
  authorizeRoles('admin'),
  [
    body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
    body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
    body('bio').optional().trim().isLength({ min: 10 }).withMessage('Bio must be at least 10 characters'),
  ],
  validateRequest,
  updateTeamMember
);

router.delete('/:id', protect, authorizeRoles('admin'), deleteTeamMember);

module.exports = router;
