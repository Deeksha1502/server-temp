const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },
  subjectId: {
    type: Number,
    required: true,
    unique: true,
  },

  description: {
    type: String,
  },
});

const Subject = mongoose.model('Subjects', subjectSchema); //Students is the collection
module.exports = Subject;
