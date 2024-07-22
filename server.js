const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const PASSWORD = process.env.PASSWORD;
const mongoose = require('mongoose');
const Student = require('./models/student');
app.use(bodyParser.json()); //called in every route .json is used to convert
const cors = require('cors');
app.use(cors());
const mongoURL = `mongodb+srv://deeksha:${PASSWORD}@cluster0.mptltqo.mongodb.net/student`; //student is the database
mongoose
  .connect(mongoURL)
  .then(() => console.log('Connected to MongoDB server'))
  .catch((err) => console.error('MongoDB connection error', err));
const StudentRoute = require('./routes/StudentRoute');
app.use('/student', StudentRoute);
const SubjectRoute = require('./routes/SubjectRoute');
app.use('/subject', SubjectRoute);
app.listen(PORT, () => {
  console.log('App is running on port 3000');
});
