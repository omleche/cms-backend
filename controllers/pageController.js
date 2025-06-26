const Page = require('../models/Page');

exports.createPage = async (req, res) => {
  try {
    const page = await Page.create(req.body);
    res.status(201).json(page);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPages = async (req, res) => {
  const pages = await Page.find();
  res.json(pages);
};

exports.getPageBySlug = async (req, res) => {
  const page = await Page.findOne({ slug: req.params.slug });
  page ? res.json(page) : res.status(404).json({ message: 'Not found' });
};

exports.updatePage = async (req, res) => {
  const page = await Page.findByIdAndUpdate(req.params.id, req.body, { new: true });
  page ? res.json(page) : res.status(404).json({ message: 'Not found' });
};

exports.deletePage = async (req, res) => {
  const page = await Page.findByIdAndDelete(req.params.id);
  page ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' });
};
