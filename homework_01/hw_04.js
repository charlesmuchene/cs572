const { Observable } = require('rxjs');

String.prototype.filterWords = function(badWords) {
	const delimiter = ' ';
	return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};

function filterStringWords(statement, badWords) {
	return new Observable(function(observer) {
		const result = statement.filterWords(badWords);
		observer.next(result);
		observer.complete();
	});
}

const observable = filterStringWords('This house is nice!', [ 'house', 'nice' ]);
observable.subscribe((data) => {
	console.log(data);
});
