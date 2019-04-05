const { fork } = require('child_process');
const { Subject } = require('rxjs');
const http = require('http');
const url = require('url');

const subject = new Subject();
subject.subscribe(processRequest);

http.createServer(serve).listen(1234, () => console.log('Server started!'));

function serve(request, response) {
	subject.next({ request, response });
}

function processRequest(requestResponse) {
	const { request, response } = requestResponse;

	response.writeHead(200, { 'Content-Type': 'video/mp4' });

	const pathname = url.parse(request.url, true).query.url;

	if (pathname) spawnMovieProcess(pathname, response);
	else response.end();
	
}

function spawnMovieProcess(path, response) {
	const movieProcess = fork('stream_movie.js');

	movieProcess.on('message', (data) => {
		if (data == 'end') response.end();
		else if (data === 'error') response.end();
		else response.write(Buffer.from(data));
	});

	movieProcess.send({ path });
}
