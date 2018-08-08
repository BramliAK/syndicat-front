import { Forum } from './../../models/forum';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm } from '@angular/forms';
import { ForumService } from '../../service/forum/forum.service';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  modalRef: BsModalRef;
  forum:Forum[]=[]
  constructor(private modalService: BsModalService,private _forum:ForumService) { }

  ngOnInit() {
    this.getForum()
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    
  }
  OnSubmit(form:NgForm){
    
    this._forum.addforum(form.value.titre)
    this.forum=[]
    this.getForum()
  }
  getForum(){

    
    this._forum.getforum().subscribe(r=>{
      for (const i in r) {
        this.forum.push(r[i]);
      }
    })
    
  }

}
