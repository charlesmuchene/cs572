const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const dbName = 'rest';
const collectionName = 'restaurants';

const client = MongoClient(uri, { useNewUrlParser: true });

client.connect((error) => {
	runQueries();
});

function runQueries() {
	const db = client.db(dbName);
	const collection = db.collection(collectionName);

	const filter = { 'address.coord.1': { $elemMatch: { $eq: 40.6550235 } } };

	const projection = {};

	collection.find(filter, projection).limit(5).toArray((error, data) => {
		console.dir(data);
		// console.log(JSON.stringify(data))
		client.close();
	});
}
