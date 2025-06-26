const express = require('express');
const router = express.Router();
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

const { protect } = require('../middleware/authMiddleware');

router.get('/', getBlogs);                     // Public
router.post('/', protect, createBlog);         // Auth required
router.get('/:id', getBlogById);               // Public
router.put('/:id', protect, updateBlog);       // Auth required
router.delete('/:id', protect, deleteBlog);    // Auth required

module.exports = router;
