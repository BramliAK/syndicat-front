import { AdduserService } from './../../service/adduser/adduser.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _AddUserService:AdduserService) { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    //console.log(Math.random()*10000000)
    this._AddUserService.adduser(Math.random()*10000000,form.value.nom,form.value.prenom,form.value.tel,form.value.adresse,form.value.email).subscribe(
      resp=>{
        console.log("sus")
         
      },
      err=>{
        console.log("erreur")
        
          
      }
    )


  }
}
