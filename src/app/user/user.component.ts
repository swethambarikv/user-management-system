import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User1 } from './user';
import { RoleService } from '../service/role.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public userLogin = new User1('Swethambari', 'Swetha27@');
  public roleList: any = ['Admin'];
  public username: string = '';
  public psw: string = '';


  constructor(private router: Router, private loginService: LoginService, public roleService: RoleService) { }
  public roleValue: string = '';
  public role1: string = ''

  ngOnInit(): void {
    this.role1 = this.roleService.roleValue;
    console.log("ts:", this.role1)

  }

  public rolePass(role1: string) {
    this.role1 = role1;
    this.role1 = this.roleService.roleValue;
  }
  public handleClick() {
    console.log(this.username)
    console.log(this.userLogin.username)


    if (this.username === this.userLogin.username) {
      if (this.psw === this.userLogin.password) {
        return true
      }
      else {
        alert("check password")
        return false
      }
    }
    else {
      alert("user not found")
      return false
    }
  }
  

  public display(formData: NgForm) {
    console.log("user role : " + this.role1)
    console.log("user username : " + this.username)
    console.log(formData.value);
    this.roleService.getRole(this.role1)

    if (this.username && this.psw && this.role1) {
      if (this.role1 == "admin") {
        if (this.handleClick()) {
          console.warn("you are admin");

          this.router.navigate(['/table']);
        }
      } else {

        console.warn("you are user");

        this.router.navigate(['/table']);
      }
    }
    else {
      alert("fill this")
    }

  }
  public displayAdmin(){
    console.log("Username(Admin): "+this.username);
    console.log("Password(Admin): "+this.psw);
  }
}

