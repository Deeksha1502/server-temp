const Subject = require('../models/subject');

const getAllSubjects = async (req, res) => {
  try {
    const data = await Subject.find();
    console.log('data fetched successfully');

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      err: 'Error occurred while retrieving students',
      propertyDetails: err.message,
    });
  }
};

const getSubjectById = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await Subject.findById(userId);
    console.log('data fetched successfully');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      err: 'Error occurred while retrieving students',
      propertyDetails: err.message,
    });
  }
};

const updateSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const updatedSubjectData = req.body;
    const response = await Subject.findByIdAndUpdate(subjectId, updatedSubjectData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({
        error: 'Subject not found',
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

const deleteSubject = async (req, res) => {
  try {
    const subjectId = req.params.id;

    const response = await Subject.findByIdAndDelete(subjectId);
    if (!response) {
      return res.status(404).json({ error: 'Subject not found' });
    }
    console.log('Data deleted');
    res.status(200).json({
      message: 'Subject deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      err: 'Error occurred while deleting the student',
      propertyDetails: err.message,
    });
  }
};

const postSubject = async (req, res) => {
  try {
    const data = req.body;
    const newSubject = new Subject(data);
    const savedStudent = await newSubject.save();

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
  getAllSubjects,
  updateSubject,
  deleteSubject,
  postSubject,
  getSubjectById,
};
