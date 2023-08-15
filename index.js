require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const cors = require('cors');

const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database connected');
});
const app = express();
app.use(cors({ credentials: true }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.setHeader('Permissions-Policy', 'ch-ua-form-factor');
  next();
});

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api', routes);

app.listen(3000, () => {
  console.log(`Server started at ${3000}`);
});
