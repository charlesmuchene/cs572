String.prototype.filterWords = function(badWords) {
	const delimiter = ' ';
	return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};

new Promise(function(resolve, reject) {
	const result = 'This house is nice!'.filterWords([ 'house', 'nice' ]);
	resolve(result);
}).then(function(data) {
	console.log(data);
});
