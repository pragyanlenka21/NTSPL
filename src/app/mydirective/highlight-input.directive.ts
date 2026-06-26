import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightInput]'
})
export class HighlightInputDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input')
  onInput() {
    this.el.nativeElement.value =
      this.el.nativeElement.value.toUpperCase();
  }

}
