const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
// middlewares
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const PASSWORD = process.env.PASSWORD;
app.listen(PORT, () => {
  console.log(`app is running on port {PORT}`);
});