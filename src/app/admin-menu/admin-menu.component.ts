import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  name: string;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.name = window.localStorage.getItem('currentUserName');
    if(window.localStorage.getItem('currentUserRole')=='user') {
      this.router.navigate(['user-menu']);
    }
  }

  navigateToBikeList() {
    this.router.navigate(['list-bike-admin'])
  }

  navigateToUserList() {
    this.router.navigate(['list-user'])
  }

  navigateToTransactionList() {
    this.router.navigate(['list-transaction'])
  }

  navigateToUserMenu() {
    this.router.navigate(['user-menu'])
  }

  navigateToManufacturerList() {
    this.router.navigate(['list-manufacturer'])
  }

  logout() {
    window.localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
