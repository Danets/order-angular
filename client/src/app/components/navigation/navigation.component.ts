import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private auth: LoginService) {
    // if (!localStorage.getItem('loggedInUser')) {
    //   this.router.navigate(['/login']);
    // }
  }

  ngOnInit() {}

  // logout() {
  //   localStorage.removeItem('loggedInUser');
  //   this.router.navigate(['/login']);
  // }

}
