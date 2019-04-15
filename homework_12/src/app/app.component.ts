import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		Component counter value = {{componentCounterValue}}
    <app-counter [counter]="componentCounterValue" (counterChange)="refreshCounter($event)"></app-counter>
  `,
	styles: []
})
export class AppComponent {
	componentCounterValue: number = 5;
	refreshCounter(counter: number) {
		this.componentCounterValue = counter;
	}
}
