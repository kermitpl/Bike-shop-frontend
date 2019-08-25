import { Component, OnInit } from '@angular/core';
import {Bike} from "../model/bike.model";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-bike-admin',
  templateUrl: './list-bike-admin.component.html',
  styleUrls: ['./list-bike-admin.component.css']
})
export class ListBikeAdminComponent implements OnInit {

  bikes: Bike[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getBikes()
      .subscribe( data => {
        this.bikes = data;
      });
  }

  deleteBike(bike : Bike): void {
    this.apiService.deleteBike(bike.id)
      .subscribe( data => {
        this.bikes = this.bikes.filter(u => u !== bike);
      })
  };

  editBike(bike : Bike): void {
    window.localStorage.removeItem("editBikeId");
    window.localStorage.setItem("editBikeId", bike.id);
    this.router.navigate(['edit-bike']);
  };

  addBike(): void {
    this.router.navigate(['add-bike']);
  };

  backToMenu() {
    if (window.localStorage.getItem("currentUserRole") == "admin") this.router.navigate(['admin-menu']);
    else this.router.navigate(['user-menu']);
  }

}
