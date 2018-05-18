import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretHidden = false;
  log = [];

  onButtonClick() {
    this.secretHidden = !this.secretHidden;
    this.log.push(Date.now());
  }

  isLogListLongEnough(index) {
    return index >= 4;
  }

  getLogListColor(index) {
    return this.isLogListLongEnough(index) ? 'blue' : 'initial';
  }
}
