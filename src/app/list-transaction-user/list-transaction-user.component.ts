import { Component, OnInit } from '@angular/core';
import {Transaction} from "../model/transaction.model";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {Bike} from "../model/bike.model";

@Component({
  selector: 'app-list-transaction-user',
  templateUrl: './list-transaction-user.component.html',
  styleUrls: ['./list-transaction-user.component.css']
})
export class ListTransactionUserComponent implements OnInit {

  transactions: Transaction[];
  bb: Bike;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getTransactionSpecificUser(localStorage.getItem('currentUser'))
      .subscribe( data => {
        this.transactions = data;
        for (let t of this.transactions)
        {
          this.apiService.getBikeById(t.model)
            .subscribe(data => {
              this.bb = data;
              t.model=this.bb.model;
            });
        }
      });
  }


  backToMenu() {
    if (window.localStorage.getItem("currentUserRole") == "admin") this.router.navigate(['admin-menu']);
    else this.router.navigate(['user-menu']);
  }

}
