const { Observable } = require('rxjs');
const os = require('os');

function checkSystem() {
	const requiredRAM = 4;
	const requiredCores = 2;
	const oneGB = Math.pow(2, 30);

	const ram = os.totalmem() / oneGB;
	const cores = os.cpus().length;

	if (ram < requiredRAM) return 'This app needs at least 4GB of RAM.';
	else if (cores < requiredCores) return 'Processor is not supported.';
	else return 'System is checked successfully.';
}

console.log('Checking your system...');

Observable.create((observe) => {
	const message = checkSystem();
	observe.next(message);
}).subscribe(function(message) {
	console.log(message);
});
