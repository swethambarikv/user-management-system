import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User1 } from './user';
import { RoleService } from '../Role/role.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // userForm = new FormGroup({
  //   name: new FormControl(''),
  //   password: new FormControl(''),
  //   role: new FormControl('')
  // })
  userLogin = new User1('Swethambari', 'Swetha27@');
  // roleList: any = ['Admin','User'];
  roleList: any = ['Admin'];
  username: string = '';
  psw: string = '';
  // userform: FormGroup;




  constructor(private router: Router, private loginService: LoginService, private roleService: RoleService) { }
  role: string = '';

  ngOnInit(): void {
    // this.role=this.roleService.role;


    // this.roleService.roleValue=this.role;

  }
  // btnClick(){
  //   this.router.navigate(['/login']);

  // }

  handleClick() {
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


  display(formData: NgForm) {
    console.log("user role : " + this.role)
    console.log("user username : " + this.username)
    console.log(formData.value);
    this.roleService.getRole(this.role)

    if (this.username && this.psw && this.role) {
      if (this.role == "admin") {
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
}

