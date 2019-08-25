import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {ListBikeComponent} from "./list-bike/list-bike.component";
import {ListBikeAdminComponent} from "./list-bike-admin/list-bike-admin.component";
import {AddBikeComponent} from "./add-bike/add-bike.component";
import {EditBikeComponent} from "./edit-bike/edit-bike.component";
import {ListTransactionComponent} from "./list-transaction/list-transaction.component";
import {EditTransactionComponent} from "./edit-transaction/edit-transaction.component";
import {AddTransactionComponent} from "./add-transaction/add-transaction.component";
import {AdminMenuComponent} from "./admin-menu/admin-menu.component";
import {UserMenuComponent} from "./user-menu/user-menu.component";
import {ListTransactionUserComponent} from "./list-transaction-user/list-transaction-user.component";
import {ManufacturerListComponent} from "./manufacturer-list/manufacturer-list.component";
import {ManufacturerListUserComponent} from "./manufacturer-list-user/manufacturer-list-user.component";
import {AddManufacturerComponent} from "./add-manufacturer/add-manufacturer.component";
import {EditManufacturerComponent} from "./edit-manufacturer/edit-manufacturer.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'list-bike', component: ListBikeComponent},
  { path: 'list-bike-admin', component: ListBikeAdminComponent},
  { path: 'add-bike', component: AddBikeComponent},
  { path: 'edit-bike', component: EditBikeComponent},
  { path: 'list-transaction', component: ListTransactionComponent},
  { path: 'edit-transaction', component: EditTransactionComponent},
  { path: 'add-transaction', component: AddTransactionComponent},
  { path: 'admin-menu', component: AdminMenuComponent},
  { path: 'user-menu', component: UserMenuComponent},
  { path: 'list-transaction-user', component: ListTransactionUserComponent},
  { path: 'list-manufacturer', component: ManufacturerListComponent},
  { path: 'list-manufacturer-user', component: ManufacturerListUserComponent},
  { path: 'add-manufacturer', component: AddManufacturerComponent},
  { path: 'edit-manufacturer', component: EditManufacturerComponent},
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
