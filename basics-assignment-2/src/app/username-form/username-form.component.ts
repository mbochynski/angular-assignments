import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  isResetButtonDisabled() {
    return this.username === '';
  }

  onUsernameReset() {
    this.username = '';
  }

}
