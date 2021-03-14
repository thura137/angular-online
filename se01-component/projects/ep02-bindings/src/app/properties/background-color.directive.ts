import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})


export class BackgroundColorDirective implements OnChanges {

  constructor(private render: Renderer2, private element: ElementRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.render.setStyle(this.element.nativeElement, 'background-color', this.appBackgroundColor)
  }

  @Input()
  appBackgroundColor?: string = ""

}
