import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';
import { RoleService } from '../service/role.service';
import { NgForm } from '@angular/forms'

declare var M: any;

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

    this.refreshForm();
    this.resetForm();
  }

  refreshForm() {
    this.login.getUser().subscribe((res) => {
      this.login.user1 = res as User[];
    })
  }


  resetForm(form?: NgForm) {
    console.log("Reset");
    if (form)
      form.reset();
    this.login.user2 = {
      _id: 0,
      name: "",
      email: "",
      mobile: "",
      topic: "",
      gender: ""

    }
  }
  onRemove(_id: number) {
    console.log(_id);
    if (confirm("Are you sure to delete the user?") == true) {
      this.login.deleteUser(_id).subscribe((res) => {
        console.log(res);
        this.refreshForm();
        // this.resetForm(form);
        M.toast({
          html: 'User Deleted!', classes: 'rounded'
        });
      })
    }

  }








  
  public rolePass(role1: string) {
    this.role1 = role1;
    this.role1 = this.roleService.roleValue;
  }
  public isRole() {
    // if(this.roleService.getRole(this.roleValue)==="admin"){
    // console.log(this.roleService.getRole(this.roleValue))
    // }
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
