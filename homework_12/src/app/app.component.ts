import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
    <app-counter [counter]="10" (counterChange)="refreshCounter($event)"></app-counter>
  `,
	styles: []
})
export class AppComponent {
	refreshCounter(counter: number) {
		console.log(counter);
	}
}
