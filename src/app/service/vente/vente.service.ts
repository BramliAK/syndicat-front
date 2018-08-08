import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { vente } from '../../models/vente';
import { AutheticationService } from '../authentication/authetication.service';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data' })
};
@Injectable()
export class VenteService {
  private host:String="http://localhost:8088";
  constructor(private http:HttpClient,private _auth:AutheticationService) { }
  private token=null;
addVente(file,id,titre,prix,categorie,des,tel){
  this.token=this._auth.loadToken();
    
    if(this.token==null) this._auth.loadToken();
  let formdata: FormData = new FormData();
  console.log(file[0])
  formdata.append('file', file[0]);
  formdata.append('id',id);
  formdata.append('titre',titre);
  formdata.append('prix',prix);
  formdata.append('categorie',categorie);
  formdata.append('des',des);
  formdata.append('tel',tel);

  return this.http.post<vente>(this.host+'/vente',formdata,{headers:new HttpHeaders({'Authorization':this.token})}).subscribe(r=>{console.log(r)},
  err=>{
    console.log("erreur")
    
      
  });
}
}
