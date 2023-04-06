import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.transform = 'scale(0.5)';
   
  }
  scale = 1;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = `scale(${this.scale})`;
    this.scale += 0.1;
  }

}
