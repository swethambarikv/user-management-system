import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Form';
  topics =['Angular','React','php','Python','Pearl','.Net','EBA','Oracle','BFS'];
  userModel = new User();
  _id: number = 0;
  constructor(private router:Router,private login:LoginService,private route: ActivatedRoute){}
  ngOnInit(){
    const data = localStorage.getItem(this.userModel.name);
    console.log(" ans "+this.userModel.name);
    console.log(" data :"+data);
    console.log("_Id : "+this.userModel._id);
    this.route.params.subscribe(params => {
      this._id = params['_id'];
      if (this._id != null) {
        this.userModel._id=(params['_id']);
        const data = this.login.getUsersByID(this._id);
        if (data) {
          this.userModel=(data);
        }
      }
    });
  }
  public userdata()
  {
    if (this.userModel._id === 0) {
      //Create New User
      console.log("_id : "+this.userModel._id)
      this.login.setMessage(this.userModel);
    } else {
      //Update User info
      this.login.updateUser(this.userModel);
  }
  this.router.navigate(['/table']);
  }}
