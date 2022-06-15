import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user1';

@Component({
  selector: 'app-dispaly',
  templateUrl: './dispaly.component.html',
  styleUrls: ['./dispaly.component.scss']
})
export class DispalyComponent implements OnInit {
  id: number = 0;
  userList = new User();
  constructor(private service:LoginService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      if (this.id != null) {
        this.userList.id=(params['id']);
        const data = this.service.getUsersByID(this.id);
        console.log(this.userList);
        if (data) {
          console.log(this.userList);
          this.userList = (data);
        }
      }
    });
  }
  // display(){
  //   return  this.service.getUsersByID(this.id);
  // }
}
