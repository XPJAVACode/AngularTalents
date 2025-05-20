import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirectiveColor]'
})
export class MyDirectiveDirective {

  @Input() appMyDirectiveColor = 'yellow';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appMyDirectiveColor);
  }

  private highlight(color: string | null){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
