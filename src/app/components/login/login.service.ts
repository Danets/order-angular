import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

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
    return this.http.post('/api/user/create', {
      username: user.username,
      password: user.password,
      //email: user.email
    })
  }

}
