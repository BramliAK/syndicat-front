import { Component, OnInit } from '@angular/core';
import { ConsulterService } from '../../service/consulter/consulter.service';
import { ActivatedRoute } from '@angular/router';
import { userchange } from '../../models/joins';

@Component({
  selector: 'app-consulterdetaitechange',
  templateUrl: './consulterdetaitechange.component.html',
  styleUrls: ['./consulterdetaitechange.component.css']
})
export class ConsulterdetaitechangeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _consluter:ConsulterService) { }
userechange:userchange[]=[];
  ngOnInit() {
    this.getechange();
  }

  getechange(){
    const id = this.route.snapshot.paramMap.get('id');
    
    this._consluter.gettel(id).subscribe(r=>{
      this._consluter.joinUserEchange(r.tel,id).subscribe(u=>{
        this.userechange.push(u)
        
      })
    });
    console.log(this.userechange)
  }
}
