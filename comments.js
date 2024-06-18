// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Serve static files
app.use(express.static('public'));
// Serve comments
app.get('/comments', (req, res) => {
  res.json([
    {
      id: 1,
      text: 'This is the first comment.',
    }
  ]);
});