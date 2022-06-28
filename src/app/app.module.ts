import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './user/user.component';
import { LoginService } from './service/login.service';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DispalyComponent } from './dispaly/dispaly.component';
import { RoleComponent } from './role/role.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { RoleUserComponent } from './role-user/role-user.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    NavbarComponent,
    UserComponent,
    DispalyComponent,
    RoleComponent,
    AdminComponent,
    UserTableComponent,
    RoleUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
