import { Component, OnInit } from '@angular/core';
import { LoginService, TokenPayload } from './login.service';
import { Router } from '@angular/router';

import { User } from '../../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: TokenPayload = {
    email: '',
    password: ''
  };
  // public user: User;

  constructor(private loginService: LoginService, private router: Router) {
    // this.user = new User();
  }

  ngOnInit() {
  }

  handleLogin() {
console.log(this.user)
    this.loginService.login(this.user).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, err => console.dir(err))

    this.user = {
      email: '',
      password: ''
    };

    // if (this.user.username && this.user.password) {
    //   this.loginService.validateLogin(this.user).subscribe(result => {
    //     if (result['status'] === 'success') {
    //       localStorage.setItem('loggedInUser', this.user.username);
    //       this.router.navigate(['/home']);
    //       //this.user = result['data'][0];
    //     } else {
    //       alert('Wrong username password');
    //     }

    //   }, error => {
    //     console.log('error is ', error);
    //   });
    // } else {
    //   alert('enter user name and password');
    // }
  }

}
