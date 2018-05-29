import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email],
          this.forbiddenEmails),
      }),
      gender: new FormControl(this.genders[0]),
      hobbies: new FormArray([]),
    });

    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log('value', value);
    // });
    this.signupForm.statusChanges.subscribe((value) => {
      console.log('status', value);
    });
  }

  handleSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    const value = control.value;
    if (this.forbiddenUsernames.includes(value)) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
