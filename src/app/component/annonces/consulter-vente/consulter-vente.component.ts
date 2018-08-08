import { Vue, userchange } from './../../../models/joins';
import { UserService } from './../../../service/user/user.service';
import { echange } from './../../../models/echange';
import { vente } from './../../../models/vente';
import { ConsulterService } from './../../../service/consulter/consulter.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';


@Component({
  selector: 'app-consulter-vente',
  templateUrl: './consulter-vente.component.html',
  styleUrls: ['./consulter-vente.component.css']
})
export class ConsulterVenteComponent implements OnInit {
ven:vente;
echa:echange;
join:Vue[]=[];
join2:userchange[]=[];
vue:Vue;

  constructor(private _consulter:ConsulterService,private _user:UserService) { }

  ngOnInit() {
    this.getvente()
    this.getechange()
    
  }
getvente(){
 
  this._consulter.getvente().subscribe(r=>{
    
    for (const i in r) {
      
      this.ven=r[i]
      
      this._consulter.joinUserVente(this.ven.tel,this.ven.id).subscribe(r=>{this.join.push(r)})
    }
    console.log(this.join)
   
    
    
  })
}
getechange(){
  this._consulter.getechange().subscribe(r=>{
    for (const i in r) {
      this.echa=r[i]
      
      this._consulter.joinUserEchange(this.echa.tel,this.echa.id).subscribe(u=>{
        this.join2.push(u)
      })
    }
    console.log(this.join2)
    
  })
}

}
