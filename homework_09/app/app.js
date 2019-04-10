const MongoClient = require('mongodb').MongoClient;

const dbUri = 'mongodb://localhost:27017';
const dbName = 'zips';
const collectionName = 'zips';

const client = new MongoClient(dbUri, { useNewUrlParser: true });

client.connect((error) => {
	if (error) throw new Error(error.message);
	doQueries();
});

function doQueries() {
	const db = client.db(dbName);
	const collection = db.collection(collectionName);

	const pipeline = [ { $match: { state: 'WA' } } ];

	const callback = (err, cursor) => {
		if (err) throw new Error(err.message);
		cursor.toArray((error, data) => {
			if (error) throw new Error(error.message);
			console.dir(data);
			client.close();
		});
	};
	collection.aggregate(pipeline, callback);
}
