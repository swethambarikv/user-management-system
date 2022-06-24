import { Component, OnInit } from '@angular/core';
import { User } from '../user1';
import { LoginService } from '../service/login.service';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../service/role.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  name : string ='';
  userList= new User();
  roleValue:string='';
  user : User[] = [];
  roleName: string='';
  constructor(private login:LoginService,private router:Router,private route: ActivatedRoute,public roleService:RoleService) { }

  ngOnInit():void{
    this.user=this.login.getUsers();
    this.roleName=this.roleService.roleValue;

    console.log("Role : ",this.roleService.roleValue)
  }

  isRole() {
    if(this.roleService.roleValue === "admin") {
      return true
    }

    return false
  }

  remove(name : string){
    localStorage.removeItem(name);
    console.warn("remove id :" + name);
    this.login.removeUser(name);
    this.user = this.login.getUsers(); 
  }

}
