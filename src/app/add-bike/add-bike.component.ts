import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      size: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createBike(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-bike-admin']);
      });
  }

}
