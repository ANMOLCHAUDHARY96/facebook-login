import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };

  constructor(private _router: Router, private _apiService: ApiService) {}

  login() {
    this._apiService.login(this.form).subscribe(
      (res: any) => {
        localStorage.setItem('username', this.form.email);
        localStorage.setItem('password', this.form.password);
        console.log(this.form.email);
        console.log(this.form.password);
        localStorage.setItem('loggedin', 'true');
        // localStorage.setItem('username', res->username);
        console.log('sfhafh');
        this._router.navigate(['show']);
        console.log(res);
      },
      (error: any) => {
        window.alert('Invalid user');
      }
    );
  }

  ngOnInit() {}
}
