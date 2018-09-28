import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(public _router: Router, public Api: ApiService, public _formBuilder: FormBuilder) { }

  registeruser(registrationForm) {
    console.log(registrationForm.name);

    const insert: any = {
      firstname: registrationForm.firstname,
      lastname: registrationForm.lastname,
      username: registrationForm.username,
      email: registrationForm.email,
      password: registrationForm.password,
      gender: registrationForm.gender

    };
    this.Api.signup(insert).subscribe(res => {
      console.log(res);
    },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.registrationForm = this._formBuilder.group({
      id: null,
      username: [null, [Validators.required, Validators.maxLength(100)]],
      firstname: [null, [Validators.required, Validators.maxLength(100)]],
      lastname: [null, [Validators.required, Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.maxLength(100)]],
      password: [null, [Validators.required, Validators.maxLength(100)]],
      gender: [null, [Validators.required, Validators.maxLength(100)]]
    });
  }

  register({ value, invalid }) {
    console.log(value);

  }
}
