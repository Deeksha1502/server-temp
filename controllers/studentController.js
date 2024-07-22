const Student = require('../models/student');

getAllStudents = async (req, res) => {
  try {
    const data = await Student.find();
    console.log('data fetched successfully');

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      err: 'Error occurred while retrieving students',
      propertyDetails: err.message,
    });
  }
};

const updateStudent = async (req, res) => {
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

    console.log('Data updated');
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      err: 'Error occurred while updating the student',
      propertyDetails: err.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;

    const response = await Student.findByIdAndDelete(studentId);
    if (!response) {
      return res.status(404).json({ error: 'Student not found' });
    }
    console.log('Data deleted');
    res.status(200).json({
      message: 'Student deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      err: 'Error occurred while deleting the student',
      propertyDetails: err.message,
    });
  }
};

const postStudent = async (req, res) => {
  try {
    const data = req.body;
    const newStudent = new Student(data);
    const savedStudent = await newStudent.save();
    console.log('Student saved successfully:', savedStudent);

    res.status(201).json({
      msg: 'data sent successfully',
      student: savedStudent,
    });
  } catch (err) {
    res.status(500).json({
      err: 'Error occurred while deleting the student',
      propertyDetails: err.message,
    });
  }
};

module.exports = {
  getAllStudents,
  updateStudent,
  deleteStudent,
  postStudent,
};
