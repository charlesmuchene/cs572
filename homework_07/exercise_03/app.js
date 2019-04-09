// Dependencies
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const lecturesRoute = require('./routes/lectures');

// Configuration
const port = 1234;
const dbUri = 'mongodb://localhost:27017';
const client = new MongoClient(dbUri, { useNewUrlParser: true });

// Initialization
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (request, response) => response.end('Connected to home!'));

app.use('/api/lectures', (request, response, next) => {
	lecturesRoute.parseRequest(client, request, response, next);
});

// Error handling
app.use((error, request, response, next) => {
	console.log(error);
	response.status(error.status || 500);
	response.send({
		code: error.status,
		message: error.message
	});
});

// Boot up
app.listen(port, () => {
	connectToDb();
	console.log('Server running...');
});

// Others
function connectToDb() {
	client.connect().then(() => console.log('Connected. Now transcend my friend!')).catch((error) => {
		client.close();
		console.log(error.message);
	});
}

process.on('exit', (data) => {
	console.log(data);
	client.close();
});
