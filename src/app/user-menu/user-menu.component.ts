import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  name: string;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.name = window.localStorage.getItem('currentUserName')
  }

  navigateToBikeList() {
    this.router.navigate(['list-bike'])
  }

  navigateToEditUser() {
    window.localStorage.setItem("editUserId", window.localStorage.getItem("currentUser"));
    this.router.navigate(['edit-user'])
  }

  navigateToTransactions() {
    this.router.navigate(['list-transaction-user'])
  }

  navigateToManufacturers() {
    this.router.navigate(['list-manufacturer-user'])
  }

  logout() {
    window.localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
