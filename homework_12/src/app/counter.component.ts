import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-counter',
	template: `
    <div>
      <button (click)="decrement()">-</button>  {{counterValue}}  <button (click)="increment()">+</button>
    </div>
  `,
	styles: [ `div {text-align: center;}` ]
})
export class CounterComponent implements OnInit {
	counterValue: number = 0;

	constructor() {}

	ngOnInit() {}

	decrement() {
		this.counterValue--;
	}

	increment() {
		this.counterValue++;
  }
  
}
