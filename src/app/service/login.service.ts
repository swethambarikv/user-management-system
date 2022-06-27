import { Injectable } from '@angular/core';
import { User } from '../user1';
import { User1 } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userLogin = new User1(' ', ' ');
  public userList: User[] = [{
    id: 1,
    name: 'Tharani',
    email: 'tharani@gmail.com',
    gender: 'female',
    mobile: '9360506369',
    topic: 'angular'
  }];
  public id1: number = 0;
  public Role: string = '';
  constructor() { 
    
  }
  public setMessage(user: User) {
    user.id = this.userList.length + 1;
    this.userList.push(user);

  }
  public getUsersByName(name: String) {
    this.userList = this.userList.filter(x => x.name != name);
  }
  public getUsers() {
    return this.userList
  }
  public getUsersByID(id: number) {
    return this.userList.find(x => x.id == id)
  }
  public removeUser(name: String) {
    this.userList = this.userList.filter(x => x.name != name);
  }
  public loggedIn() {
    return true;
  }
  public logged() {
    return true;
  }
  public getRole(role: string) {
    this.Role = role;
  }
  public updateUser(user: User) {
    const userIndex = this.userList.findIndex(x => x.id == user.id);
    this.userList[userIndex] = user;
  }

}
