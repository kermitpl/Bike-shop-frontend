import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {first} from "rxjs/operators";
import {Manufacturer} from "../model/manufacturer.model";

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html',
  styleUrls: ['./edit-manufacturer.component.css']
})
export class EditManufacturerComponent implements OnInit {

  manufacturer: Manufacturer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    let manufacturerId = window.localStorage.getItem("editManufacturerId");
    if (!manufacturerId) {
      alert("Invalid action.")
      this.router.navigate(['list-manufacturer']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      origin: ['', Validators.required],
      founded: ['', Validators.required]
    });
    this.apiService.getManufacturerById(manufacturerId)
      .subscribe(data => {
        this.manufacturer = data;
        this.editForm.setValue(this.manufacturer);
      });
  }

  onSubmit() {
    this.apiService.updateManufacturer(this.editForm.value, this.manufacturer.id)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-manufacturer']);
          alert("updated");
        },
        error => {
          alert(error);
        });

  }

}
