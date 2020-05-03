const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const recipeRouter = require('./routes/recipeRoutes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/recipies', recipeRouter);

module.exports = app;
