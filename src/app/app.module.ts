import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './user/user.component';
import { LoginService } from './service/login.service';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DispalyComponent } from './dispaly/dispaly.component';
// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    NavbarComponent,
    UserComponent,
    DispalyComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
