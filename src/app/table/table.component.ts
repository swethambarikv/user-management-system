import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  name : string ='';
  userList= new User();
  // roleValue:string='';
  user : User[] = [];
  roleName: string='';
  // role1:string='';

  roleValue:string='';
  role1:string='';


  constructor(private login:LoginService,
    private router:Router,
    private route: ActivatedRoute,
    public roleService:RoleService) { }

  ngOnInit():void{
    this.user=this.login.getUsers();
    this.roleName=this.roleService.roleValue;

    console.log("Role : ",this.roleService.roleValue)
    // this.role1=this.roleService.roleValue;
    // console.log("Table:",this.role1)
  }


  rolePass(role1:string){
    this.role1=role1;
    this.role1=this.roleService.roleValue;
  }








  isRole() {
    // if(this.roleService.getRole(this.roleValue)==="admin"){
// console.log(this.roleService.getRole(this.roleValue))
    // }
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
