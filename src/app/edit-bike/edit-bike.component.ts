import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {first} from "rxjs/operators";
import {Bike} from "../model/bike.model";

@Component({
  selector: 'app-edit-bike',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css']
})
export class EditBikeComponent implements OnInit {

  bike: Bike;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    let bikeId = window.localStorage.getItem("editBikeId");
    if (!bikeId) {
      alert("Invalid action.")
      this.router.navigate(['list-bike-admin']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      size: ['', Validators.required]

    });
    this.apiService.getBikeById(bikeId)
      .subscribe(data => {
        this.bike = data;
        this.editForm.setValue(this.bike);
      });
  }

  onSubmit() {
    this.apiService.updateBike(this.editForm.value, this.bike.id)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-bike-admin']);
          alert("updated");
        },
        error => {
          alert(error);
        });

  }
}
