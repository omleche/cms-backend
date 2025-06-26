const express = require('express');
const { getAllTeam, getTeamMember, createTeamMember, updateTeamMember, deleteTeamMember } = require('../controllers/teamController');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', getAllTeam);
router.get('/:id', getTeamMember);
router.post('/', protect, authorizeRoles('admin'), createTeamMember);
router.put('/:id', protect, authorizeRoles('admin'), updateTeamMember);
router.delete('/:id', protect, authorizeRoles('admin'), deleteTeamMember);

module.exports = router;
