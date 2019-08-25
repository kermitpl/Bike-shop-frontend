import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      role: [''],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required]

    });
    this.apiService.getUserById(userId)
      .subscribe( data => {
        this.user=data;
        this.editForm.setValue(this.user);
      });
  }

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.backToMenu();
          alert("updated");
        });
  }

  backToMenu() {
    if (window.localStorage.getItem("currentUserRole") == "admin") this.router.navigate(['admin-menu']);
    else this.router.navigate(['user-menu']);
  }

}
