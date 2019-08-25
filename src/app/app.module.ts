import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {TokenInterceptor} from "./core/interceptor";
import { ListBikeComponent } from './list-bike/list-bike.component';
import { ListBikeAdminComponent } from './list-bike-admin/list-bike-admin.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { EditBikeComponent } from './edit-bike/edit-bike.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ListTransactionUserComponent } from './list-transaction-user/list-transaction-user.component';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerListUserComponent } from './manufacturer-list-user/manufacturer-list-user.component';
import { AddManufacturerComponent } from './add-manufacturer/add-manufacturer.component';
import { EditManufacturerComponent } from './edit-manufacturer/edit-manufacturer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    ListBikeComponent,
    ListBikeAdminComponent,
    AddBikeComponent,
    EditBikeComponent,
    ListTransactionComponent,
    EditTransactionComponent,
    AddTransactionComponent,
    AdminMenuComponent,
    UserMenuComponent,
    ListTransactionUserComponent,
    ManufacturerListComponent,
    ManufacturerListUserComponent,
    AddManufacturerComponent,
    EditManufacturerComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
