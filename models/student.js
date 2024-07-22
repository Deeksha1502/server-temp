const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rollno: {
    type: Number,
    max: 99999,
  },
  skills: {
    type: [String],
    default: ['DSA', 'Dev'],
  },
});

const Student = mongoose.model('Students', studentSchema); //Students is the collection
module.exports = Student;
