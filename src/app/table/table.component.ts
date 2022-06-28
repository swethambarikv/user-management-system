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
  public name: string = '';
  public userList = new User();
  // roleValue:string='';
  public user: User[] = [];
  public roleName: string = '';
  // role1:string='';

  public roleValue: string = '';
  public role1: string = '';


  constructor(private login: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    public roleService: RoleService) { }

  ngOnInit(): void {
    this.user = this.login.getUsers();
    this.roleName = this.roleService.roleValue;

    console.log("Role : ", this.roleService.roleValue)
  }


  public rolePass(role1: string) {
    this.role1 = role1;
    this.role1 = this.roleService.roleValue;
  }

  public isRole() {

    if (this.roleService.roleValue === "admin") {
      return true
    }

    return false
  }

  public remove(name: string) {
    localStorage.removeItem(name);
    console.warn("remove id :" + name);
    this.login.removeUser(name);
    this.user = this.login.getUsers();
  }

}
