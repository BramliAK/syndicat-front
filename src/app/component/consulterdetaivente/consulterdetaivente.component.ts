import { Component, OnInit } from '@angular/core';
import { ConsulterService } from '../../service/consulter/consulter.service';
import { ActivatedRoute } from '@angular/router';
import { Vue } from '../../models/joins';

@Component({
  selector: 'app-consulterdetaivente',
  templateUrl: './consulterdetaivente.component.html',
  styleUrls: ['./consulterdetaivente.component.css']
})
export class ConsulterdetaiventeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _consluter:ConsulterService) { }
  uservente:Vue[]=[];
  ngOnInit() {
    this.getvente()
  }

  getvente(){
    const id = this.route.snapshot.paramMap.get('id');
    this._consluter.gettelvente(id).subscribe(r=>{
console.log(r.tel)
      this._consluter.joinUserVente(r.tel,id).subscribe(u=>{
        this.uservente.push(u);
      })
    })
    //console.log(this.uservente)
  }
}
