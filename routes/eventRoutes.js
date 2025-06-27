const express = require('express');
const router = express.Router();
const {
  createEvent, 
  getEvents, 
  getEventById, 
  updateEvent, 
  deleteEvent,
} = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');


// Validate with express-validate
router.post(
  '/',
  protect,
  authorizeRoles('admin', 'editor'),
  [
    body('name').notEmpty(),
    body('date').notEmpty().isISO8601().withMessage('Must be a valid date'),
    body('location').notEmpty(),
    body('description').notEmpty(),
  ],
  validateRequest,
  createEvent
);

router.put(
  '/:id',
  protect,
  authorizeRoles('admin', 'editor'),
  [
    body('name').optional().notEmpty(),
    body('date').optional().isISO8601(),
    body('location').optional().notEmpty(),
    body('description').optional().notEmpty(),
  ],
  validateRequest,
  updateEvent
);


router.get('/', getEvents);
router.get('/:id', getEventById);

router.delete('/:id', protect, deleteEvent);

module.exports = router;
