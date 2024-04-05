require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', async() => {
  console.log('Connected to MongoDB Database')
})

// accept json
app.use(express.json());

app.use(cors());

// create routes
const registrationsRouter = require('./routes/registrations');
app.use('/registrations', registrationsRouter);

const reservationsRouter = require('./routes/reservations');
app.use('/reservations', reservationsRouter);

app.listen(3000, () => console.log('Server Started'));
