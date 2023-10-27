// formController.js

const Form = require('../models/formModel'); // Import the Mongoose model

// Controller function to create a new form entry
exports.createFormEntry = async (req, res) => {
  try {
    const formData = new Form(req.body);
    const savedData = await formData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ error: 'Failed to save form data' });
  }
};

// Controller function to retrieve all form entries
exports.getAllFormEntries = async (req, res) => {
  try {
    const formEntries = await Form.find();
    res.status(200).json(formEntries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve form data' });
  }
};
