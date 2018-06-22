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
      transition('normal <=> highlighted', animate(300)),
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        borderRadius: 0,
        transform: 'translateX(0) scale(1)',
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        borderRadius: 0,
        transform: 'translateX(100px) scale(1)',
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        borderRadius: 0,
        transform: 'translateX(0px) scale(0.5)',
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(600)),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange',
        }),
        animate(1000, style({
          borderRadius: '50px',
        })),
        animate(500),
      ],
    ),
    ]),
    trigger('list1', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(-100px)',
        })),
      ]),
    ]),
  ],
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.pop();
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';
  }
  
  onShrink() {
    this.wildState = 'shrunken';
  }
}
