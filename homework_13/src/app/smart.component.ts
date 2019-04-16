import { Person } from './models/person';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-smart',
	template: `
    <button (click)="showHide()">{{buttonText}}</button>
    <hr>
    <div [isVisible]="displayPeople">
      <h1>This is what they had to say:</h1>
      <ol>
        <app-dumb *ngFor="let person of people" [person]="person"></app-dumb>
      </ol>
    </div>
    <div [isVisible]="!displayPeople">There are no people to display!</div>
  `,
	styles: []
})
export class SmartComponent {
	people: Person[];
	displayPeople: boolean = true;
	buttonText = 'Hide people';

	constructor() {
		this.people = [ { name: 'Charles', age: 10 }, { name: 'Jane', age: 12 }, { name: 'Sean', age: 3 } ];
	}

	showHide() {
		this.buttonText = this.displayPeople ? 'Hide people' : 'Show people';
		this.displayPeople = !this.displayPeople;
	}
}
