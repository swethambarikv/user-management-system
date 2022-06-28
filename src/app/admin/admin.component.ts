import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoleService } from '../service/role.service';
import { User } from '../user1';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  public topics = ['Angular', 'React', 'php', 'Python', 'Pearl', '.Net', 'EBA', 'Oracle', 'BFS'];
  public userModel = new User();
  public id: number = 0;
  constructor(private router: Router, private login: LoginService, private route: ActivatedRoute) { }
  ngOnInit() {
    const data = localStorage.getItem(this.userModel.name);
    console.log(" ans " + this.userModel.name);
    console.log(" data :" + data);
    console.log("Id : " + this.userModel.id);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.userModel.id = (params['id']);
        const data = this.login.getUsersByID(this.id);
        if (data) {
          this.userModel = (data);
        }
      }
    });
  }
  public userdata() {
    if (this.userModel.id === 0) {
      //Create New User
      console.log("id : " + this.userModel.id)
      this.login.setMessage(this.userModel);
    } else {
      //Update User info
      this.login.updateUser(this.userModel);
    }
    this.router.navigate(['/table']);
  }
}
