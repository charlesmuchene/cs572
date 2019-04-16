import { Component, OnInit, Input } from '@angular/core';
import { Person } from './models/person';

@Component({
	selector: 'app-dumb',
	template: `
    <li>At {{person.age}} years, they call me {{person.name}}. You can yell <span>{{person.name | uppercase}}</span>!</li>
  `,
	styles: [ 'li {font-size: 1.5em}', 'span { color: red }' ]
})
export class DumbComponent implements OnInit {
	@Input() person: Person;

	constructor() {}

	ngOnInit() {}
}
