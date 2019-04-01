String.prototype.filterWords = function(badWords) {
	const delimiter = ' ';
	return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};

const result = 'This house is nice!'.filterWords([ 'house', 'nice' ]);
console.log(result);
