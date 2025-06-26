const TeamMember = require('../models/TeamMember');

exports.getAllTeam = async (req, res) => {
  const team = await TeamMember.find();
  res.json(team);
};

exports.getTeamMember = async (req, res) => {
  const member = await TeamMember.findById(req.params.id);
  res.json(member);
};

exports.createTeamMember = async (req, res) => {
  const member = await TeamMember.create(req.body);
  res.status(201).json(member);
};

exports.updateTeamMember = async (req, res) => {
  const updated = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTeamMember = async (req, res) => {
  await TeamMember.findByIdAndDelete(req.params.id);
  res.json({ message: 'Team member deleted' });
};
