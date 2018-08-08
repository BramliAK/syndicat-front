import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutheticationService } from '../authentication/authetication.service';
import { Forum } from '../../models/forum';

@Injectable()
export class ForumService {

  forum:any;
  disc:any;
  private token=null;
  private host:String="http://localhost:8088";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }

  addforum(tit:String){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    this.forum=JSON.stringify({
    id: Math.random()*1000,
    titre: tit,
    disscution: [],
    date: "2019-12-12"})
    return this.http.post(this.host+'/form',this.forum,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})}).subscribe(r=>console.log(r))
  }

  getforum(){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();

    return this.http.get<Forum>(this.host+'/form',{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})})
  }

  getForumbytitre(titre){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();


return this.http.get<Forum>(this.host+'/formt/'+titre,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})})
  
  }

  setdescution(dess:string,titre){

this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();

    this.disc=JSON.stringify({ id:Math.random()*1000,
      iduser:22,
      commentaire:dess})
console.log(dess)
  return this.http.post(this.host+'/form/'+titre,this.disc,{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})})
      
  }

}
