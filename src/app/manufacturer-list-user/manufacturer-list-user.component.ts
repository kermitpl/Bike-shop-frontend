import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "../model/manufacturer.model";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-manufacturer-list-user',
  templateUrl: './manufacturer-list-user.component.html',
  styleUrls: ['./manufacturer-list-user.component.css']
})
export class ManufacturerListUserComponent implements OnInit {

  manufacturers: Manufacturer[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getManufacturers()
      .subscribe( data => {
        this.manufacturers = data;
      });
  }

  backToMenu() {
    if (window.localStorage.getItem("currentUserRole") == "admin") this.router.navigate(['admin-menu']);
    else this.router.navigate(['user-menu']);
  }

}
