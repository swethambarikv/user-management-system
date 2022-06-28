import { Injectable } from '@angular/core';
// import { User } from '../user1';
import { User } from './user1';
import { User1 } from '../user/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userLogin = new User1(' ', ' ');
  public userList: User[] = [{
    _id: 1,
    name: 'Tharani',
    email: 'tharani@gmail.com',
    gender: 'female',
    mobile: '9360506369',
    topic: 'angular'
  }];
  user1:User[]=[];
  user2!:User;


  readonly baseURL = "http://localhost:3000/employees/"
  
  public id1: number = 0;
  public Role: string = '';
  constructor(private http : HttpClient) {  }


  public setMessage(user: User) {
    user._id = this.userList.length + 1;
    this.userList.push(user);

  }
  public getUsersByName(name: String) {
    this.userList = this.userList.filter(x => x.name != name);
  }
  public getUsers() {
    return this.userList
  }
  public getUsersByID(_id: number) {
    return this.userList.find(x => x._id == _id)
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
    const userIndex = this.userList.findIndex(x => x._id == user._id);
    this.userList[userIndex] = user;
  }
// HTTP methods
 public getUser(){
    return this.http.get(this.baseURL);
  }
  public postUser(newUser:User){
    return this.http.post(this.baseURL,newUser);

  }
  public putUser(newUser:User){
    return this.http.put(this.baseURL+`/${newUser._id}`,newUser)
  }
  public deleteUser(_id:number){
    return this.http.delete(this.baseURL+`/${_id}`)
  }
}
