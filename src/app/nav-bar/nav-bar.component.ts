import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent {
  title = 'tdfForm';
  topics = ['angular', 'react', 'php'];
  userModel = new User();
  _id: number = 0;
  display: any;
  constructor(private router: Router, private login: LoginService, private route: ActivatedRoute) { }
  ngOnInit() {
    const data = localStorage.getItem(this.userModel.name);

    console.log(" ans " + this.userModel.name);
    console.log(" data :" + data);
    console.log("_Id : " + this.userModel._id);
    this.route.params.subscribe(params => {
      this._id = params['_id'];
      if (this._id != null) {
        this.userModel._id = (params['_id']);
        const data = this.login.getUsersByID(this._id);
        if (data) {
          this.userModel = (data);
        }
      }
    });
  }
  public userdata() {

    if (this.userModel._id === 0) {
      //Create New User
      console.log("_id : " + this.userModel._id)
      this.login.setMessage(this.userModel);
    } else {
      //Update User info
      this.login.updateUser(this.userModel);
    }
    this.router.navigate(['/table']);
  }
  public logIn() {
    this.router.navigate(['/login']);

  }
  public logOut() { }


}
