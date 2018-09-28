import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _httpClient: HttpClient) {}

  login(params: any): Observable<any> {
// here post the details of registerd user

    return this._httpClient.post(
      'http://127.0.0.1:8000/api/auth/login',
      params
    );
  }

  signup(insert: any): Observable<any> {

        // here post the details to register user

    return this._httpClient.post('http://localhost:8000/api/signup', insert);
  }

  getData(): Observable<any> {

     // show the registerd user

    return this._httpClient.get('http://localhost:8000/api/loginshow');
  }

}
