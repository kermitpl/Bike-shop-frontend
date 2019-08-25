import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {first} from "rxjs/operators";
import {Transaction} from "../model/transaction.model";

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  transaction: Transaction;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    let tranId = window.localStorage.getItem("editTranId");
    if (!tranId) {
      alert("Invalid action.")
      this.router.navigate(['list-transaction']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      user: ['', Validators.required],
      model: ['', Validators.required],
      quantity: ['', Validators.required],
      paymentType: [''],
      createdAt:['', Validators.required]

    });
    this.apiService.getTransactionById(tranId)
      .subscribe(data => {
        this.transaction = data;
        this.editForm.setValue(this.transaction);
      });
  }

  onSubmit() {
    this.apiService.updateTransaction(this.editForm.value, this.transaction.id)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-transaction']);
          alert("updated");
        },
        error => {
          alert(error);
        });

  }

}
