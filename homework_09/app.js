const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb://localhost:27017');

client.connect((error) => {
	if (error) throw new Error(error.message);
	doQueries();
});

function doQueries() {
	const db = client.db('zips');
	const collection = db.collection('zips');

    const pipeline = [];
    
	const callback = (err, cursor) => {
		if (err) throw new Error(err.message);
		cursor.toArray((error, data) => {
			if (error) throw new Error(error.message);
			console.dir(data);
		});
	};
	collection.aggregate(pipeline, callback);
	client.close();
}
