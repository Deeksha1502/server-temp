const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const db = require('./db');
const Student = require('./models/student');

app.use(bodyParser.json()); //called in every route .json is used to convert

app.get('/', (req, res) => {
  res.send('hiii');
});

app.post('/student', async (req, res) => {
  try {
    const data = req.body;
    const newStudent = new Student(data); //new document we are creating
    const savedStudent = await newStudent.save(); //saving the doc in the db
    res.status(201).json({
      message: 'Student created successfully',
      student: savedStudent,
    });
  } catch (err) {
    res.status(500).json({
      err: 'Error occured while saving the student',
      propertyDetails: err.message,
    });
  }
});

app.get('/getStudent', async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      err: 'Error occured while saving the student',
      propertyDetails: err.message,
    });
  }
});

app.put('/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedStudentData = req.body;
    const response = await Student.findByIdAndUpdate(studentId, updatedStudentData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({
        error: 'Student not found',
      });
    }

    console.log('data updated');
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      err: 'Error occured while saving the student',
      propertyDetails: err.message,
    });
  }
});

app.post('/student', async (req, res) => {
  try {
    const data = req.body;
    const newStudent = new Student(data); //new document we are creating
    const savedStudent = await newStudent.save(); //saving the doc in the db
    res.status(201).json({
      message: 'Student created successfully',
      student: savedStudent,
    });
  } catch (err) {
    res.status(500).json({
      err: 'Error occured while saving the student',
      propertyDetails: err.message,
    });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    const studentId = req.params.id;

    const response = await Student.findByIdAndDelete(studentId);
    if (!response) {
      return res.status(404).json({ error: 'student not found' });
    }
    console.log('data delete');
    res.status(200).json({
      message: 'student deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      err: 'Error occured while saving the student',
      propertyDetails: err.message,
    });
  }
});

app.listen('3000', () => {
  console.log('App is running on port 3000');
});
