import { Directive, ElementRef, Renderer2, HostListener, AfterViewInit, OnInit } from '@angular/core';

@Directive({
	selector: '[makeBigger]'
})
export class MakeBiggerDirective {
	private size: number = 14;

	constructor(private element: ElementRef, private renderer: Renderer2) {}

	@HostListener('dblclick')
	onDoubleClick() {
		this.size += 2;
		this.renderer.setStyle(this.element.nativeElement, 'font-size', `${this.size}px`);
	}
}
