String.prototype.filterWords = function(badWords) {
	const delimiter = ' ';
	return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};

async function filterStringWords(statement, badWords) {
	try {
		const result = await statement.filterWords(badWords);
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

filterStringWords('This house is nice!', [ 'house', 'nice' ]);
