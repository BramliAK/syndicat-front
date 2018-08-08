import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AutheticationService } from '../authentication/authetication.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class RapportService {

  private host:String="http://localhost:8088";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
  getRapport(){
    this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
    return this.http.get(this.host+'/',{headers:new HttpHeaders({'Content-Type': 'application/json','Authorization':this.token})})
  }

}
