const express = require('express');
const router = express.Router();

const grades = require('../data/grades');

router.get('/', (request, response, next) => response.send(grades));

router.get('/:id', (request, response, next) => {
	const id = request.params.id;
	if (id > grades.length || id <= 0) return next({ status: 404, message: `No grade with id ${id}` });
	const grade = grades[id - 1];
	response.send(grade);
});

router.post('/', (request, response, next) => {
	const grade = request.body;
	grade.id = grade.id || Math.ceil(Math.random() * 10 + grades.length);
	grades.push(grade);
	response.redirect('/api/grades');
});

module.exports = router;
