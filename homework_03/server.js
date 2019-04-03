const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer(callback).listen(1234, () => console.log('Started server. Listening on port 1234.'));

function callback(request, response) {
	response.writeHead(200, { 'Content-Type': 'video/mp4' });
	const moviePath = fs.readFileSync(path.join(__dirname, '.env'));
	readStream(moviePath, response);
	// readAsync(moviePath, response);
	// readSync(moviePath, response);
	console.log('Enjoy the show!');
}

// Stream file read
function readStream(path, response) {
	fs.createReadStream(path).pipe(response);
}

// Async file read
function readAsync(path, response) {
	fs.readFile(path, (error, data) => {
		if (error) console.log(error);
		else response.write(data);
	});
}

// Sync file read
function readSync(path, response) {
	const data = fs.readFileSync(path);
	response.write(data);
}
