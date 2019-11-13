import { Component, OnInit } from '@angular/core';
import { LoginService, TokenPayload } from './login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { User } from '../../../models/user'

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

  handleLogin(form: NgForm) {
    this.user = form.value
    console.log(this.user)
    this.loginService.login(this.user).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, err => console.dir(err))

    form.reset();
  }

}
