import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {Manufacturer} from "../model/manufacturer.model";

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit {

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

  deleteManufacturer(manufacturer: Manufacturer): void {
    this.apiService.deleteManufacturer(manufacturer.id)
      .subscribe( data => {
        this.manufacturers = this.manufacturers.filter(u => u !== manufacturer);
      })
  };

  editManufacturer(manufacturer: Manufacturer): void {
    window.localStorage.removeItem("editManufacturerId");
    window.localStorage.setItem("editManufacturerId", manufacturer.id);
    this.router.navigate(['edit-manufacturer']);
  };

  addManufacturer(): void {
    this.router.navigate(['add-manufacturer']);
  };

  backToMenu() {
    if (window.localStorage.getItem("currentUserRole") == "admin") this.router.navigate(['admin-menu']);
    else this.router.navigate(['user-menu']);
  }

}
