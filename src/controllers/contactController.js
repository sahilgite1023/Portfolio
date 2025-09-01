// Contact Controller

// Import Contact model (uncomment when model is created)
// const Contact = require('../models/Contact');

// Temporary data for development
let contacts = [];

// Submit contact form
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide name, email, and message' });
    }
    
    // When MongoDB is connected, use: const newContact = await Contact.create({ name, email, subject, message });
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || 'No Subject',
      message,
      date: new Date().toISOString()
    };
    
    contacts.push(newContact);
    
    // In a real application, you would send an email notification here
    
    res.status(201).json({ 
      message: 'Message sent successfully', 
      contact: newContact 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error: error.message });
  }
};

// Get all contact submissions (protected route in real app)
exports.getAllContacts = async (req, res) => {
  try {
    // When MongoDB is connected, use: const allContacts = await Contact.find().sort({ date: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
};