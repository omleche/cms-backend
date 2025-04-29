const { getProjectsById } = require("../controllers/projectControllers");

const express = ('express');
const router = express.router();

const {
    createProject,
    getProject,
    getProjectsById,
    updateProject,
    deleteProject,
} = require('../controllers/projectControllers');

const { protect } = require('../middleware/authMiddleware');

router.get('/', getProject);     // Public
router.post('/', project,createProject);    // Authenticated user
router.get('/:id', getProjectsById);     // Public
router.put('/:id', protect, updateProject);     // Authenticated user
router.delete('/:id', protect, deleteProject);  // Authenticated user


module.exports = router;