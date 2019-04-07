const express = require('express');
const createError = require('http-errors');
const gradesRouter = require('./routes/grades');
const indexRouter = require('./routes/index');

const app = express();
const port = 1234;

app.use('/', indexRouter);
app.use('/api/grades', gradesRouter);

// 404
app.use((request, response, next) => {
    next(createError(404));
})

// Errors
app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.send(`${error.status}: ${error.message}`)
})

app.listen(port, () => console.log('Started playground!'));
