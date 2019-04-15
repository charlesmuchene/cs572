import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-counter',
	template: `
    <div>
      <button>-</button>{{counterValue}}<button>+</button>
    </div>
  `,
	styles: [ `div {text-align: center;}` ]
})
export class CounterComponent implements OnInit {
	counterValue: 0;

	constructor() {}

	ngOnInit() {}
}
