import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() tick = new EventEmitter<number>();

  isGameStarted = false;
  timer = null;
  tickCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartClicked() {
    this.isGameStarted = true;
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.tick.emit(this.tickCounter);
        this.tickCounter += 1;
      }, 1000);
    }
  }

  onStopClicked() {
    clearInterval(this.timer);
    this.timer = null;
  }

}
