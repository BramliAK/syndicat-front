import {AutheticationService} from '../authentication/authetication.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AdduserService {
  private host:String="http://localhost:8088";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  
  adduser(id,nom,prenom,tel,adresse,email){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    var user=JSON.stringify({id:id,nom:nom,prenom:prenom,tel:tel,role:[{id:1,nom:"ADMIN"}] ,adresse:[{block: "D4",
    appartement: "435",
     type: "pp"}], password:"1234" })
     console.log(user)
    return this.http.post(this.host+"/user",user,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})});
  }
  

}
