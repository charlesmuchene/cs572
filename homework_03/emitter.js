const EventEmitter = require('events');

class Gym extends EventEmitter {
	constructor() {
		super();
		this.interval = 1000;
		this.startEmitter();
	}

	startEmitter() {
		setInterval(() => this.emit('boom'), this.interval);
	}
}

const gym = new Gym();
gym.on('boom', () => console.log('Athlete is working out!'));
