import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

	@Input() counter: number;

	@Output() counterChange = new EventEmitter<number>();

	constructor() {}

	ngOnInit() {
		this.counterValue = this.counter;
	}

	decrement() {
		this.counterValue--;
		this.counter = this.counterValue;
		this.counterChange.emit(this.counterValue);
	}

	increment() {
		this.counterValue++;
		this.counter = this.counterValue;
		this.counterChange.emit(this.counterValue);
	}
}
