const BlogPost = require('../models/BlogPost');

exports.createBlog = async (req, res) => {
  try {
    const blog = await BlogPost.create({ ...req.body, author: req.user._id });
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getBlogs = async (req, res) => {
  const blogs = await BlogPost.find().populate('author', 'name');
  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await BlogPost.findById(req.params.id);
  blog ? res.json(blog) : res.status(404).json({ message: 'Not found' });
};

exports.updateBlog = async (req, res) => {
  const blog = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  blog ? res.json(blog) : res.status(404).json({ message: 'Not found' });
};

exports.deleteBlog = async (req, res) => {
  const blog = await BlogPost.findByIdAndDelete(req.params.id);
  blog ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' });
};
