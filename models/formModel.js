const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  areaOfInterest: {
    type: String,
    enum: ["Design", "Fullstack", "Mobile Dev"],
    required: true,
  },
  highestEducation: {
    type: String,
    required: true,
  },
  currentCompany: {
    type: String,
  },
  expertiseOrSkills: [
    {
      skill: String,
    },
  ],
  goal1: {
    type: String,
  },
  goal2: {
    type: String,
  },
  goal3: {
    type: String,
  },
  willing: {
    type: Boolean,
    default: false,
  },
  howDidYouHear: String,
});

const form = mongoose.model("form", formSchema);

module.exports = form;
