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
  _id: number = 0;
  userList = new User();
  constructor(private service: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id'];
      console.log(this._id);
      if (this._id != null) {
        this.userList._id = (params['_id']);
        const data = this.service.getUsersByID(this._id);
        console.log(this.userList);
        if (data) {
          console.log(this.userList);
          this.userList = (data);
        }
      }
    });
  }
}
