const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Get all projects
router.get('/', projectController.getAllProjects);

// Get a single project by ID
router.get('/:id', projectController.getProjectById);

// Create a new project (protected route in real app)
router.post('/', projectController.createProject);

// Update a project (protected route in real app)
router.put('/:id', projectController.updateProject);

// Delete a project (protected route in real app)
router.delete('/:id', projectController.deleteProject);

module.exports = router;