import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DispalyComponent } from './display/dispaly.component';
import { DispalyComponent } from './dispaly/dispaly.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component:NavbarComponent},
{path:'login' ,component:UserComponent,},
{ path: 'user', component: LoginComponent},
{ path: 'table', component: TableComponent},
{path: 'update-add/:id', component: LoginComponent},
{path:'display',component:DispalyComponent},
{path:'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
