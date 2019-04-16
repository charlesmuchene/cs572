import { Person } from './models/person';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-smart',
	template: `
    <h1>This is what they had to say:</h1>
    <ol>
      <app-dumb *ngFor="let person of people" [person]="person"></app-dumb>
    </ol>
  `,
	styles: []
})
export class SmartComponent implements OnInit {
	people: Person[];

	constructor() {
		this.people = [ { name: 'Charles', age: 10 }, { name: 'Jane', age: 12 }, { name: 'Sean', age: 3 } ];
	}

	ngOnInit() {}
}
