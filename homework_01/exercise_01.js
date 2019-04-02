// Filter words extension function
String.prototype.filterWords = function(badWords) {
	const delimiter = ' ';
	return this.split(delimiter).map((word) => word.replace(new RegExp(badWords.join('|')), '***')).join(delimiter);
};

// *************************************************************** //

// Exercise 01 part A
const result = 'This house is nice!'.filterWords([ 'house', 'nice' ]);
console.log(result);

// *************************************************************** //

// Exercise 01 part B
function filterStringWordsB(statement, badWords) {
	return new Promise(function(resolve, reject) {
		const result = statement.filterWords(badWords);
		resolve(result);
	}).then(function(data) {
		console.log(data);
	});
}

filterStringWordsB('This house is nice!', [ 'house', 'nice' ]);

// *************************************************************** //

// Exercise 01 part C
async function filterStringWordsC(statement, badWords) {
	try {
		const result = await statement.filterWords(badWords);
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}

filterStringWordsC('This house is nice!', [ 'house', 'nice' ]);

// *************************************************************** //

// Exercise 01 part D
const { Observable } = rxjs;

function filterStringWordsD(statement, badWords) {
	return Observable.create(function(observer) {
		const result = statement.filterWords(badWords);
		observer.next(result);
	});
}

const observable = filterStringWordsD('This house is nice!', [ 'house', 'nice' ]);
observable.subscribe((data) => console.log(data));
