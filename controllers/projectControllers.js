const Project = require('../model/Project');


//@desc Create new project

exports.createProject = async ( req, res ) =>{
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc Get all projects
exports.getProjects = async (req, res ) =>{
    try {
        const project = await Project.find().sort({ createAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//@desc Get single project by ID
exports.getProjectsById = async (req, res ) =>{
    try {
        const project = await Project.findByID(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found'});
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//@desc Update Project
exports.updateProject = async (req, res ) =>{
    try {
        const project = await Project.findByID(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!project) return res.status(404).json({ message: 'Project not found'});
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//@desc Delete project
exports.deleteProject = async (req, res ) =>{
    try {
        const project = await Project.findByID(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found'});
        res.json({ message: 'Project Deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
