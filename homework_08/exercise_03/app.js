// Dependencies
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Configuration
const dbUri = 'mongodb://localhost:27017';
const dbName = 'mum_locations';
const port = 1234;
const collectionName = 'locations';
const mumLocation = { latitude: 41.017654, longitude: -91.9665342 };
let database;

// Initialization
const app = express();
const client = new MongoClient(dbUri);

// Middlewares
app.use(express.json());
app.use((request, response, next) => {
	if (!database) {
		client.connect((error) => {
			database = client.db(dbName);
			request.collection = database.collection(collectionName);
			next();
		});
	} else {
		request.collection = database.collection(collectionName);
		next();
	}
});

// Routes
app.get('/locations', (request, response, next) => {
	request.collection.find({}).toArray((error, data) => {
		response.json({ data: data });
	});
});

app.post('/locations', (request, response, next) => {
	const location = request.body;
	console.dir(location);
	request.collection.insertOne(location);
	response.json({ status: 200, message: `Location inserted is ${location}` });
});

app.get('/locations/near_mum', (request, response, next) => {
	request.collection
		.find({ location: { $near: [ mumLocation.longitude, mumLocation.latitude ] } })
		.limit(3)
		.toArray((error, locations) => {
			console.dir(locations);
			response.json(locations);
		});
});

// Error handling

// Bootup
app.listen(port, () => console.log('Shikorina :3'));

process.on('exit', () => {
	console.log('We are closing down the server');
	client.close();
});
