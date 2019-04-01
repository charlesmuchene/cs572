String.prototype.filterWords = function(badWords) {
	const delimiter = ' ';
	return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};

function filterStringWords(statement, badWords) {
	return new Promise(function(resolve, reject) {
		const result = statement.filterWords(badWords);
		resolve(result);
	}).then(function(data) {
		console.log(data);
	});
}

filterStringWords('This house is nice!', [ 'house', 'nice' ]);
