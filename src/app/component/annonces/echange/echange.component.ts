import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EchangeService } from '../../../service/echange/echange.service';

@Component({
  selector: 'app-echange',
  templateUrl: './echange.component.html',
  styleUrls: ['./echange.component.css']
})
export class EchangeComponent implements OnInit {

  constructor(private _echange:EchangeService) { }
  files : FileList; 
  ngOnInit() {
  }
  getFiles(event){ 
    this.files = event.target.files; 
}
OnSubmit(form:NgForm){
    console.log(form.value.Titre)
    return this._echange.addechange(this.files,Math.random()*10000000,form.value.Titre,form.value.echange,form.value.select,form.value.textarea,form.value.Tel)
  }
}
