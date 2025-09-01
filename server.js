const express = require('express');
// Commenting out mongoose since we're not using MongoDB for now
// const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
try {
  require('dotenv').config();
} catch (error) {
  console.log('No .env file found or dotenv not installed, using default settings');
}

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection (commented out until MongoDB is set up)
/*
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));
*/

// Import routes
try {
  const projectRoutes = require('./src/routes/projectRoutes');
  const contactRoutes = require('./src/routes/contactRoutes');
  
  // Use routes
  app.use('/api/projects', projectRoutes);
  app.use('/api/contact', contactRoutes);
} catch (error) {
  console.log('Routes not loaded, serving static files only');
}

// Routes are now handled in the try-catch block above

// Serve the main HTML file for all routes (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});