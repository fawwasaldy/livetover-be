require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.URL_DATABASE;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database connected');
});

const app = express();

const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use(express.json());

const konsumenRoute = require('./routes/konsumen_route');
app.use('/konsumen', konsumenRoute);

const restoranRoute = require('./routes/restoran_route');
app.use('/restoran', restoranRoute);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});