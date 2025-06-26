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

// Access public content page by slug
router.get('/slug/:slug', getPageBySlug);

// Access admin view by ID
router.get('/id/:id', getPageById);

router.get('/', getPages);

router.post('/create-page', protect, authorizeRoles('admin', 'editor'), createPage);
router.put('/:id', protect,authorizeRoles('admin', 'editor'), updatePage);
router.delete('/:id', protect, authorizeRoles('admin', 'editor'), deletePage);

module.exports = router;
