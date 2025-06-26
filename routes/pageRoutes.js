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

router.post('/', protect, createPage);
router.put('/:id', protect, updatePage);
router.delete('/:id', protect, deletePage);

module.exports = router;
