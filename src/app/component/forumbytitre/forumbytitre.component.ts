import { Forum } from './../../models/forum';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../service/forum/forum.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forumbytitre',
  templateUrl: './forumbytitre.component.html',
  styleUrls: ['./forumbytitre.component.css']
})
export class ForumbytitreComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _form:ForumService) { }
form:Forum[]=[]
  ngOnInit() {
    this.getform()
  }
  OnSubmit(form:NgForm){
    const titre = this.route.snapshot.paramMap.get('titre');

this._form.setdescution(form.value.titre,titre).subscribe(r=>console.log(r))

  }

  getform(){
    const titre = this.route.snapshot.paramMap.get('titre');

    this._form.getForumbytitre(titre).subscribe(r=>{
      for (const i in r) {
       this.form.push(r[i])
      }
    })
    console.log(this.form)
  }
}
