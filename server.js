
const express = require('express');
const mongoose = require('mongoose'); // ✅ uncomment to use MongoDB
const cors = require('cors');
const bodyParser = require('body-parser');
try {
  require('dotenv').config();
} catch (error) {
  console.log('No .env file found, using default settings');
}

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Configure CORS for your frontend (Netlify)
const corsOptions = {
  origin: "https://your-frontend.netlify.app", // replace with your Netlify URL
  credentials: true
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// Import API routes
try {
  const projectRoutes = require('./src/routes/projectRoutes');
  const contactRoutes = require('./src/routes/contactRoutes');
  
  app.use('/api/projects', projectRoutes);
  app.use('/api/contact', contactRoutes);
} catch (error) {
  console.log('❌ Routes not loaded:', error);
}

// ✅ Remove static frontend serving (frontend will be on Netlify)
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
