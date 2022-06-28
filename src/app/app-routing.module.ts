import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispalyComponent } from './dispaly/dispaly.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { RoleComponent } from './role/role.component';
import { AdminComponent } from './admin/admin.component';
import { UserTableComponent } from './user-table/user-table.component';
import { RoleUserComponent } from './role-user/role-user.component';
const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'login', component: UserComponent, },
  { path: 'user', component: LoginComponent },
  { path: 'table', component: TableComponent },
  { path: 'update-add/:id', component: LoginComponent },
  { path: 'display', component: DispalyComponent },
  { path: 'role', component: RoleComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'userTable', component: UserTableComponent },
  { path: 'roleUser', component: RoleUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
