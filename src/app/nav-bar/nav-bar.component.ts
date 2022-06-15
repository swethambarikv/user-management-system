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
  topics =['angular','react','php'];
  userModel = new User();
  id: number = 0;
  display:any;
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
    // this.router.navigate(['/table']);
    // this.login.setMessage(this.userModel);
    // localStorage.setItem(this.userModel.name, JSON.stringify(this.userModel));
    if (this.userModel.id === 0) {
      //Create New User
      console.log("id : "+this.userModel.id)
      this.login.setMessage(this.userModel);
    } else {
      //Update User info
      this.login.updateUser(this.userModel);
  }
  this.router.navigate(['/table']);
  }
logIn(){
  this.router.navigate(['/login']);

}
logOut(){}


}
