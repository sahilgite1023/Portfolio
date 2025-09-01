# Responsive Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. The website includes a Node.js backend with MongoDB integration for storing and managing portfolio data.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Project showcase with filtering capability
- Contact form with validation
- MongoDB integration for data storage
- RESTful API endpoints for portfolio data

## Tech Stack

### Frontend
- HTML5
- CSS3 (with responsive design)
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

### Dependencies
- express: Web framework for Node.js
- mongoose: MongoDB object modeling
- dotenv: Environment variable management
- cors: Cross-Origin Resource Sharing
- body-parser: Request body parsing

## Project Structure

```
├── public/               # Static files
│   ├── css/             # CSS stylesheets
│   ├── js/              # JavaScript files
│   └── images/          # Image assets
├── src/                 # Server-side code
│   ├── controllers/     # Route controllers
│   ├── models/          # MongoDB models
│   └── routes/          # API routes
├── .env                 # Environment variables
├── package.json         # Project dependencies
├── server.js            # Main server file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5000`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

## Deployment

This application can be deployed to various platforms:

- Heroku
- Vercel
- Netlify (frontend) + Heroku (backend)
- AWS

## Future Enhancements

- Authentication system for admin panel
- Blog section
- Dark/Light theme toggle
- Portfolio analytics
- Image upload functionality

## License

This project is licensed under the MIT License.