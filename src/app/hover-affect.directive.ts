import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {
  @HostBinding('style.textDecoration') textDecoration: string | undefined;
  @HostBinding('style.fontWeight') fontWeight: string | undefined;
  @Input() typeStyle: 'textDecoration' | undefined;
  @Input() tagStyle: 'fontWeight' | undefined;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.typeStyle) {
      this.textDecoration = 'underline';
    } 
    if (this.tagStyle) {
      this.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.typeStyle) {
      this.textDecoration = ''; 
    }
    if (this.tagStyle) {
      this.fontWeight = 'normal'; 
    }
  }

}