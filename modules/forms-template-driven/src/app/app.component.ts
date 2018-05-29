import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answer = '';
  defaultQuestion = 'pet';
  @ViewChild('f') myForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
 
  onSubmit() {
    console.log(this.myForm);
  }
}
