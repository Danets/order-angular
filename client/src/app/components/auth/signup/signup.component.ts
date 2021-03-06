import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, AfterContentInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService, TokenPayload } from '../login/login.service';
import { Router } from '@angular/router';

import { AddFormDirective } from '../../../directives/add-form.directive';
import { PostComponent } from '../../posts/list-post/post/post.component';

import { User } from '../../../models/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterContentInit {

  user: TokenPayload = {
    email: '',
    username: '',
    password: ''
  };

  // ocupations = ['developer', 'tester', 'hr'];
  // default = 'tester';

  // genders = ['male', 'female'];
  // gender = 'male';

  // public user: User;

@ViewChild('appAddForm', {read: ViewContainerRef, static: true}) addForm: ViewContainerRef
  //@ViewChild(AddFormDirective, {static: true}) addForm: AddFormDirective

  constructor(private loginService: LoginService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
    // this.user = new User();
  }

  ngOnInit() {
    this.loadComponent()
  }

  loadComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(PostComponent)
    // const container = this.addForm.viewContainerRef
    // container.clear()
    // const dinamicComponent = container.createComponent(factory)
    const dinamicComponent = this.addForm.createComponent(factory)
  }

  ngAfterContentInit() {
    // const factory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent)
    // const dinamicComponent = this.addForm.createComponent(factory)
  }


  onSubmit(form: NgForm) {
    this.user = form.value
    console.log(this.user);

    this.loginService.register(this.user).subscribe(res => {
      console.log(`Auth response: ${res}`);
      this.router.navigateByUrl('/profile');
      // this.router.navigate(['/profile']);
      form.reset();
    }, err => console.error(err))

    // form.reset();
    
  }

}
