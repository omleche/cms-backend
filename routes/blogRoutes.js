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
const validateRequest = require('../middleware/validateRequest');


router.post(
  '/',
  protect,
  authorizeRoles('admin', 'editor'),
  [
    body('title').notEmpty(),
    body('slug').notEmpty(),
    body('content').notEmpty(),
  ],
  validateRequest,
  createBlog
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
  updateBlog
);


router.get('/', getBlogs);                     // Public
router.get('/:id', getBlogById);               // Public
router.delete('/:id', protect, deleteBlog);    // Auth required

module.exports = router;
