import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

import { User } from '../../models/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ocupations = ['developer', 'tester', 'hr'];
  default = 'tester';

  genders = ['male', 'female'];
  gender = 'male';

  public user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.user = form.value;
    console.log(this.user)

    this.loginService.validateRegister(this.user).subscribe(result => {
      if (result['status'] === 'success') {
        localStorage.setItem('loggedInUser', this.user.username);
        this.router.navigate(['/home']);
      } else {
        alert('Name or password exists!');
      }

    }, error => {
      console.log('error is ', error);
    });

  }

}
