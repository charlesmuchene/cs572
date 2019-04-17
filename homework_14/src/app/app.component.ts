import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<a [routerLink]="['']">Home</a> 
		<br/>
		<a [routerLink]="['users']">Show all users</a>
		<hr/>
		<router-outlet></router-outlet>
  `,
	styles: []
})
export class AppComponent {}
