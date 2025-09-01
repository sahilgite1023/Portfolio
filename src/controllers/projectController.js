// Project Controller

// Import Project model (uncomment when model is created)
// const Project = require('../models/Project');

// Temporary data for development
let projects = [
  {
    id: '1',
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    imageUrl: '/images/project1.jpg',
    liveUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/username/project1',
    featured: true,
    date: '2023-06-15'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    imageUrl: '/images/project2.jpg',
    liveUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/username/project2',
    featured: true,
    date: '2023-04-10'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather application that displays forecast data from multiple APIs',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
    imageUrl: '/images/project3.jpg',
    liveUrl: 'https://example.com/project3',
    githubUrl: 'https://github.com/username/project3',
    featured: false,
    date: '2023-02-22'
  }
];

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    // When MongoDB is connected, use: const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
};

// Get a single project by ID
exports.getProjectById = async (req, res) => {
  try {
    // When MongoDB is connected, use: const project = await Project.findById(req.params.id);
    const project = projects.find(p => p.id === req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error: error.message });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  try {
    // When MongoDB is connected, use: const newProject = await Project.create(req.body);
    const newProject = {
      id: Date.now().toString(),
      ...req.body,
      date: new Date().toISOString().split('T')[0]
    };
    
    projects.push(newProject);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error: error.message });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    // When MongoDB is connected, use: const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    const index = projects.findIndex(p => p.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    projects[index] = { ...projects[index], ...req.body };
    res.status(200).json(projects[index]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error: error.message });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    // When MongoDB is connected, use: await Project.findByIdAndDelete(req.params.id);
    const index = projects.findIndex(p => p.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    projects = projects.filter(p => p.id !== req.params.id);
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error: error.message });
  }
};