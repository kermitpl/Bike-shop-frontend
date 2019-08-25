import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {Transaction} from "../model/transaction.model";

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {

  transactions: Transaction[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getTransaction()
      .subscribe( data => {
        this.transactions = data;
      });
  }

  deleteTran(tran : Transaction): void {
    this.apiService.deleteTransaction(tran.id)
      .subscribe( data => {
        this.transactions= this.transactions.filter(u => u !== tran);
      })
  };

  editTran(tran : Transaction): void {
    window.localStorage.removeItem("editTranId");
    window.localStorage.setItem("editTranId", tran.id);
    this.router.navigate(['edit-transaction']);
  };

  backToMenu() {
    if (window.localStorage.getItem("currentUserRole") == "admin") this.router.navigate(['admin-menu']);
    else this.router.navigate(['user-menu']);
  }

}
