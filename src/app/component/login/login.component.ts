import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../../service/authentication/authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  c:any;
  constructor(private autheticationService:AutheticationService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(user){
    console.log(user.nom,user.password)
    this.autheticationService.login(user.nom,user.password).subscribe(
      resp=>{
        
          let jwt=resp.headers.get('Authorization');
         this.autheticationService.saveToken(jwt);
         this.router.navigateByUrl('/dashboard');
          
      },
      err=>{
        console.log("erreur")
        
         // console.log(err);
      }
    )
  }
}
