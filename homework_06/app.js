// Dependencies
const cors = require('cors');
const express = require('express');
const createError = require('http-errors');
const gradesRouter = require('./routes/grades');
const indexRouter = require('./routes/index');

// Setup
const app = express();
const port = 1234;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/api/grades', gradesRouter);

// 404
app.use((request, response, next) => {
	next(createError(404, `Couldn't find url ${request.path}`));
});

// Errors
app.use((error, request, response, next) => {
	console.log(error);
	response.status(error.status || 500);
	response.send(`${error.status}: ${error.message}`);
});

app.listen(port, () => console.log('Started playground!'));
