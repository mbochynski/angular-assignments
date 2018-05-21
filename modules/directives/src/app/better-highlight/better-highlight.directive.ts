import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  ngOnInit() {
   this.backgroundColor = this.defaultColor; 
  }

  @HostListener('mouseenter') mouseEnterListener(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseLeaveListener(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
