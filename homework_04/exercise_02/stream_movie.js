const path = require('path');
const fs = require('fs');

function resolvePath(basepath) {
	const videoBasePath = fs.readFileSync(path.join(__dirname, '.env')).toString();
	return path.join(videoBasePath, basepath);
}

function streamVideo(videoPath) {
	const readable = fs.createReadStream(videoPath);

	readable.on('data', (data) => process.send(data));

	readable.on('error', (error) => endProcess('error'));

	readable.on('end', () => endProcess());
}

function endProcess(message = 'end') {
	process.send(message);
	process.exit();
}

process.on('message', (data) => {
	if (data.path) streamVideo(resolvePath(data.path));
	else endProcess();
});
