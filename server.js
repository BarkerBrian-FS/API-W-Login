const express = require('express');
require ('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8000;

const gameRouter = require('./routes/games');

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL , {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Database connection established'));

app.use(express.json());
app.use('/games', gameRouter);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})