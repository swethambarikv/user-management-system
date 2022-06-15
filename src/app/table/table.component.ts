import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';
import { RoleService } from '../Role/role.service';
// import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
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
