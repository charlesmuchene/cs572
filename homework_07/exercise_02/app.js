const express = require('express');
const simpleEncryptor = require('simple-encryptor');
const MongoClient = require('mongodb').MongoClient;

const dbUri = 'mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01';
const client = new MongoClient(dbUri, { useNewUrlParser: true });

const app = express();
const port = 1234;

app.get('/', (request, response) => {
	response.end('Be unbounded at /secret');
});

app.get('/secret', (request, response) => {
	fetchSecretMessage(response);
});

app.listen(port, () => console.log('Server started'));

function fetchSecretMessage(response) {
	client.connect((error) => dbConnectionHandler(error, response));
}

function dbConnectionHandler(error, response) {
	if (error) {
		console.log(error);
		response.end(error.message);
		return;
	}
	const db = client.db('homework01');
	const collection = db.collection('data');
	const projection = { projection: { key: 1, message: 1, _id: 0 } };
	collection
		.findOne({}, projection)
		.then((data) => {
			client.close();
			const message = decodeMessage(data);
			response.send({ message });
		})
		.catch((err) => {
			client.close();
			console.log(error);
			response.end(error.message);
		});
}

function decodeMessage(data) {
	const { key, message } = data;
	const encryptor = simpleEncryptor(key);
	return encryptor.decrypt(message);
}
