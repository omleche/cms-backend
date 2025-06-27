const express = require('express');
const router = express.Router();
const {
  createPage, 
  getPages, 
  getPageBySlug, 
  updatePage, 
  deletePage,
} = require('../controllers/pageController');
const { protect } = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');


// Access public content page by slug
router.get('/slug/:slug', getPageBySlug);

// Access admin view by ID
router.get('/id/:id', getPageById);

router.get('/', getPages);

router.post(
  '/',
  protect,
  authorizeRoles('admin', 'editor'),
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
    body('content').notEmpty().withMessage('Content is required'),
  ],
  validateRequest,
  createPage
);

router.put(
  '/:id',
  protect,
  authorizeRoles('admin', 'editor'),
  [
    body('title').optional().notEmpty(),
    body('slug').optional().notEmpty(),
    body('content').optional().notEmpty(),
  ],
  validateRequest,
  updatePage
);

router.delete('/:id', protect, authorizeRoles('admin', 'editor'), deletePage);

module.exports = router;
