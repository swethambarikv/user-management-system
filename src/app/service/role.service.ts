import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }
  public roleValue: string = '';
  public getRole(role: string) {
    console.log("service roll b" + this.roleValue)
    this.roleValue = role;
    console.log("service roll a" + this.roleValue)
    return this.roleValue;
  }
}
