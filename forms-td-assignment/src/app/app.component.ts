import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') userForm;
  subscriptionOptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  handleSubmit() {
    if (this.userForm.invalid) {
      console.log('INVALID', this.userForm.value);
    } else {
      console.log('VALID', this.userForm.value);
    }
  }
}
