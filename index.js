const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

// Main API endpoint
app.get('/', (req, res) => {
  const response = {
    email: "medlertimmie841@gmail.com", 
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/joeyzazalin/hng12-stage0_backend"
  };
  
  res.status(200).json(response);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});