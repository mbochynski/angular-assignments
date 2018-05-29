import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.projectNameValidator]),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null),
    });
  }

  handleSubmit() {
    console.log('FORM', this.projectForm);
    console.log('SUBMIT', this.projectForm.value);
  }

  projectNameValidator(control: FormControl): {[key: string]: boolean} {
    const name = control.value;
    if (name === 'Test') {
      return { invalid: true };
    }
    return null;
  }

  isProjectNameDirty() {
    const control = this.projectForm.controls.name;
    return control.dirty || control.touched;
  }

  isProjectNameInvalid() {
    return this.projectForm.controls.name.invalid;
  }
  
  getProjectNameErrors() {
    return this.projectForm.controls.name.errors;
  }

  isEmailDirty() {
    const control = this.projectForm.controls.mail;
    return control.dirty || control.touched;
  }

  isEmailInvalid() {
    return this.projectForm.controls.mail.invalid;
  }
}
