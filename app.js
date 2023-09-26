const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const Sequelize = require("sequelize");

const logger = require('morgan');
const indexRouter = require('./routes/index');
const taskRouter = require('./routes/tasks');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api', indexRouter);
app.use('/task', taskRouter);

module.exports = app;
