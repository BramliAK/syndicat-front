import { Component, OnInit } from '@angular/core';
import { VenteService } from '../../../service/vente/vente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  constructor(private _vente:VenteService) { }
  files : FileList; 
  ngOnInit() {
  }
  getFiles(event){ 
    this.files = event.target.files; 
}
  OnSubmit(form:NgForm){
    
  return this._vente.addVente(this.files,88,form.value.Titre,form.value.prix,form.value.select,form.value.textarea,form.value.Tel)
}
}
