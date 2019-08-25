import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'my-dream-app';
  currentUserIsAdmin: boolean;
  currentUserIsUser: boolean;

  constructor(private router: Router) { }

  changeOfRoutes() {
    this.currentUserIsAdmin = window.localStorage.getItem('currentUserRole') == "admin";
    this.currentUserIsUser = window.localStorage.getItem('currentUserRole') == "user";
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('currentUserRole');
    this.router.navigate(['login'])
  }
}
