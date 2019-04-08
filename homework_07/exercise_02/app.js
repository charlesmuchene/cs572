const express = require('express');
const simpleEncryptor = require('simple-encryptor');
const MongoClient = require('mongodb').MongoClient;

const dbUri = 'mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01';
const client = new MongoClient(dbUri);

client.connect((error) => {
	if (error) throw new Error(error.message);
	const db = client.db('homework01');
	const collection = db.collection('data');
	collection
		.findOne({}, { projection: { key: 1, message: 1, _id: 0 } })
        .then((data) => {
			client.close();
            decodeMessage(data);
		})
		.catch((error) => {
			console.log(error);
			client.close();
		});
});

function decodeMessage(data) {
    const { key, message } = data;
    const encryptor = simpleEncryptor(key);
    const secret = encryptor.decrypt(message);
    // console.log(secret);
}
// const app = express();
// const port = 1234;

// app.get('/', (request, response) => {
//     console.log("Do the necessary");
//     response.end("Done");
// })

// app.listen(port, () => console.log('Server started'));
