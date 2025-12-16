const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// View engine setup (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// GET: show form
app.get('/', (req, res) => {
  res.render('form', { response: null, error: null });
});

// POST: receive form, send to Flask backend
app.post('/submit', async (req, res) => {
  try {
    // Inside Docker, backend is reachable by service name "backend"
    const backendUrl = 'http://backend:5000/submit';

    const formData = new URLSearchParams();
    formData.append('name', req.body.name);
    formData.append('email', req.body.email);
    formData.append('message', req.body.message);

    const response = await axios.post(backendUrl, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // Render form again with response from backend
    res.render('form', { response: response.data, error: null });
  } catch (err) {
    console.error(err.message);
    res.render('form', { response: null, error: 'Error while contacting Flask backend' });
  }
});

app.listen(PORT, () => {
  console.log(`Frontend server running on http://0.0.0.0:${PORT}`);
});
