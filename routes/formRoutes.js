const express = require('express');
const router = express.Router();
const formController = require('../controller/formController');

// Route to create a new form entry
router.post('/form', formController.createFormEntry);

// Route to retrieve all form entries
router.get('/form', formController.getAllFormEntries);

module.exports = router;
