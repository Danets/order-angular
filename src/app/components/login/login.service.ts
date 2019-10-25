import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../../models/user';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validateLogin(user: User) {
    return this.http.post('/api/user/login', {
      username: user.username,
      password: user.password
    })
  }

  validateRegister(user: User) {
    return this.http.post('/api/user/signup', {
      username: user.username,
      password: user.password,
      //email: user.email
    }, httpOptions)
  }

}
