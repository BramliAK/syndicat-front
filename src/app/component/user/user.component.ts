import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../../service/authentication/authetication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tasks;
  constructor(private _user:UserService,private route:Router,private _auth:AutheticationService) { }

  ngOnInit() {
    this._user.getuser().subscribe(data=>{
      this.tasks=data;
      console.log(this.tasks);
    },err=>{
      this._auth.logout();
      this.route.navigateByUrl("/login");
    })
  }

}
