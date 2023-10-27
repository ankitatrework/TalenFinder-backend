const express = require('express');
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');

const app = express();
const port = 8080;

const mongo_url = process.env.DB_URL;

// Connect to your MongoDB database
mongoose.connect('mongo_url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Use the form routes
app.use('/survey', formRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
