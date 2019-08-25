import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Bike} from "../model/bike.model";
import {ApiService} from "../core/api.service";
import {Manufacturer} from "../model/manufacturer.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-bike',
  templateUrl: './list-bike.component.html',
  styleUrls: ['./list-bike.component.css']
})
export class ListBikeComponent implements OnInit {

  bikes: Bike[];
  mm : Manufacturer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.editForm = this.formBuilder.group({
      year: [],
      size: [],
      model: [],
      manufacturer: []
    });

    this.apiService.getBikes()
      .subscribe( data => {
        this.bikes = data;
        for (let b of this.bikes)
        {
          this.apiService.getManufacturerById(b.manufacturer)
            .subscribe(data => {
              this.mm = data;
              b.manufacturer=this.mm.name;
            });
        }
      });
  }

  buyBike(bike : Bike): void {
    window.localStorage.removeItem("buyBikeId");
    window.localStorage.setItem("buyBikeId", bike.id);
    this.router.navigate(['add-transaction']);
  };

  backToMenu() {
    if (window.localStorage.getItem("currentUserRole") == "admin") this.router.navigate(['admin-menu']);
    else this.router.navigate(['user-menu']);
  }

  onSubmit1() {
    let x = this.editForm.get('year').value;
    this.bikes=this.bikes.filter(u => u.year==x);
  }
  onSubmit2() {
    let ss = this.editForm.get('size').value;
    this.bikes=this.bikes.filter(z => z.size==ss);
  }

  onSubmit3() {
    let mm = this.editForm.get('model').value;
    this.bikes=this.bikes.filter(z => z.model.includes(mm));
  }

  onSubmit4() {
    let mm = this.editForm.get('manufacturer').value;
    this.bikes=this.bikes.filter(z => z.manufacturer.includes(mm));
  }

  refresh() {
    //window.location.reload();
    this.apiService.getBikes()
      .subscribe( data => {
        this.bikes = data;
        for (let b of this.bikes)
        {
          this.apiService.getManufacturerById(b.manufacturer)
            .subscribe(data => {
              this.mm = data;
              b.manufacturer=this.mm.name;
            });
        }
      });

  }
}
