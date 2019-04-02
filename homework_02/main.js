// Uses setImmediate()
Array.prototype.even = function() {
	setImmediate(() => {
		const result = this.filter((element) => element % 2 == 0);
		console.log(result);
	});
};

// Uses process.nextTick()

Array.prototype.odd = function() {
	process.nextTick(() => {
		const result = this.filter((element) => element % 2 != 0);
		console.log(result);
	});
};

console.log('start');
[ 1, 2, 3, 4, 5, 6, 7, 8 ].even();
[ 1, 2, 3, 4, 5, 6, 7, 8 ].odd();
console.log('end');
