import { Vue, userchange } from './../../models/joins';
import { vente } from './../../models/vente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { echange } from '../../models/echange';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ConsulterService {
  private host:String="http://localhost:8088";
  constructor(private http:HttpClient) { }

  getvente(){
    return this.http.get<vente>(this.host+'/vente');
  }
  getechange(){
    return this.http.get<echange>(this.host+'/echange');
  }
  joinUserVente(tel,id){
    return this.http.get<Vue>(this.host+'/tell/'+tel+'/'+id);
  }
  joinUserEchange(tel,id){
    return this.http.get<userchange>(this.host+'/echange/'+tel+'/'+id);
  }
  gettel(id){
    return this.http.get<echange>(this.host+"/echange/"+id)
  }
  gettelvente(id){
    return this.http.get<vente>(this.host+"/vente/"+id)
  }


}
