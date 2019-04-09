const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const dbName = 'rest';
const collectionName = 'restaurants';

const client = MongoClient(uri);

client.connect((error) => {
	runQueries()
});

function runQueries() {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    collection.find({}).limit(10).toArray((error, data) => {
        console.dir(data);
        client.close();
    });

}