const express = require('express');
const router = express.Router();
const dbName = 'homework07';
const collectionName = 'lectures';

let collection;

function parseRequest(client, request, response, next) {
	collection = client.db(dbName).collection(collectionName);
	router(request, response, next);
}

router.get('/', (request, response, next) => {
	collection.find({}).toArray((error, data) => response.send(data));
});

router.get('/:lecture', (request, response, next) => {
	const lecture = request.params.lecture;
	collection
		.findOne({ lecture: lecture })
		.then((data) => {
			if (data) response.send(data);
			else next({ status: 404, message: `Lecture with name ${lecture} is not found` });
		})
		.catch((error) => {
			next({ status: 500, message: error.message });
		});
});

router.post('/', (request, response, next) => {
	const lecture = request.body;
	collection
		.insertOne(lecture)
		.then(() => response.send(lecture))
		.catch((error) => next({ status: 500, message: `Could not insert the lecture: ${lecture}` }));
});

router.put('/', (request, response, next) => {
	const lecture = request.body;
	console.log(lecture.name);
	collection
		.updateOne({ lecture: lecture.name }, lecture)
		.then(() => collection.findOne({ lecture: lecture.name }))
		.then((data) => response.send(data))
		.catch((error) => next({ status: 500, message: `Could not update lecture ${lecture}` }));
});

module.exports = { parseRequest };
