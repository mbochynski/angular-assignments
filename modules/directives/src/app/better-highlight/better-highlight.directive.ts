import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }
  
  @HostListener('mouseenter') mouseEnterListener(eventData: Event) {
    this.backgroundColor = 'blue';
  }
  
  @HostListener('mouseleave') mouseLeaveListener(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
