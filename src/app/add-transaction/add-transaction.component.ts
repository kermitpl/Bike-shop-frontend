import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {Transaction} from "../model/transaction.model";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  transaction: Transaction;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {

    let userId = window.localStorage.getItem("currentUser");
    let bikeId = window.localStorage.getItem("buyBikeId")

    this.addForm = this.formBuilder.group({
      id: [],
      user: ['', Validators.required],
      model: ['', Validators.required],
      quantity: ['', Validators.required],
      paymentType: ['']
    });

    this.addForm.patchValue({
      user: userId,
      model: bikeId
    });

  }

  onSubmit() {
    this.apiService.createTransaction(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-bike']);
        alert("Bought!")
      });
  }

}
