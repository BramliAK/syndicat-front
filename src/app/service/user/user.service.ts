import { AutheticationService } from './../authentication/authetication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';


@Injectable()
export class UserService {
  private token=null;
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private host:String="http://localhost:8088";
  getuser(){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();

   return this.http.get(this.host+"/user",{headers:new HttpHeaders({'Authorization':this.token})})
  }
  findbytel(tel){
    return this.http.get<User>(this.host+'/usertel/'+tel)
  }

}
