function isWeekend() {
	const todayDate = new Date();
	const day = todayDate.getDay();
	return [ 'Weekend', 'Weekday', 'Weekday', 'Weekday', 'Weekday', 'Weekday', 'Weekend' ][day];
}

console.log(isWeekend());
