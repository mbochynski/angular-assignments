import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0)',
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)',
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(600)),
    ]),
  ],
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state = 'highlighted';
  }
  
  onShrink() {
    this.state = 'normal';
  }
}
