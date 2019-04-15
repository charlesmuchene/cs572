class University {
	constructor(private name: string, private department: string) {
	}

	graduation(year: number) {
		console.log(`Graduating ${this.name}'s ${this.department} ${year} students`);
	}
}

const mum = new University('MUM', 'Computer Science');

mum.graduation(2019);