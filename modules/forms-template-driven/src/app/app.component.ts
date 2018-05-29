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
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    mail: '',
    question: '',
    answer: '',
    gender: '',
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
 
  onSubmit() {
    console.log(this.myForm);
    const {
      userData: {
        username,
        email: mail,
      },
      secret: question,
      questionAnswer: answer,
      gender,
    } = this.myForm.value;

    this.user = {
      username,
      mail,
      question,
      answer,
      gender
    };
    this.submitted = true;

    this.myForm.reset();
  }
}
