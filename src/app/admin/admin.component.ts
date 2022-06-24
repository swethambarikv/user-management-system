import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoleService } from '../service/role.service';
import { User } from '../user1';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
//   userLogin = new User1('Swethambari', 'Swetha27@');
//   roleList: any = ['Admin'];
//   username: string = '';
//   psw: string = '';
  
  
//   constructor(private router: Router, private loginService: LoginService, public roleService: RoleService) { }
//   roleValue: string = '';
//   role1:string=''

//   ngOnInit(): void {
//     this.role1=this.roleService.roleValue;

//   }

//   handleClick() {
//     console.log(this.username)
//     console.log(this.userLogin.username)


//     if (this.username === this.userLogin.username) {
//       if (this.psw === this.userLogin.password) {
//         return true
//       }
//       else {
//         alert("check password")
//         return false
//       }
//     }
//     else {
//       alert("user not found")
//       return false
//     }
//   }


//   display(formData: NgForm) {
//     console.log("user role : " + this.role1)
//     console.log("user username : " + this.username)
//     console.log(formData.value);
//     this.roleService.getRole(this.role1)

//     if (this.username && this.psw && this.role1) {
//       if (this.role1 == "admin") {
//         if (this.handleClick()) {
//           console.warn("you are admin");

//           this.router.navigate(['/table']);
//         }
//       } else {

//         console.warn("you are user");

//         this.router.navigate(['/table']);
//       }
//     }
//     else {
//       alert("fill this")
//     }

//   }

// }
topics =['Angular','React','php','Python','Pearl','.Net','EBA','Oracle','BFS'];
  userModel = new User();
  id: number = 0;
  constructor(private router:Router,private login:LoginService,private route: ActivatedRoute){}
  ngOnInit(){
    let data = localStorage.getItem(this.userModel.name);
    console.log(" ans "+this.userModel.name);
    console.log(" data :"+data);
    console.log("Id : "+this.userModel.id);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.userModel.id=(params['id']);
        const data = this.login.getUsersByID(this.id);
        if (data) {
          this.userModel=(data);
        }
      }
    });
  }
  userdata()
  {
    if (this.userModel.id === 0) {
      //Create New User
      console.log("id : "+this.userModel.id)
      this.login.setMessage(this.userModel);
    } else {
      //Update User info
      this.login.updateUser(this.userModel);
  }
  this.router.navigate(['/table']);
  }}
