import { ForumbytitreComponent } from './../component/forumbytitre/forumbytitre.component';
import { FormulaireComponent } from './../component/formulaire/formulaire.component';
import { ConsulterVenteComponent } from './../component/annonces/consulter-vente/consulter-vente.component';
import { RapportComponent } from './../component/rapport/rapport.component';
import { UserComponent } from './../component/user/user.component';
import { EchangeComponent } from './../component/annonces/echange/echange.component';
import { NavComponent } from './../component/nav/nav.component';
import { LoginComponent } from './../component/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VenteComponent } from '../component/annonces/vente/vente.component';
import { AddUserComponent } from '../component/add-user/add-user.component';
import { ConsulterdetaiventeComponent } from '../component/consulterdetaivente/consulterdetaivente.component';
import { ConsulterdetaitechangeComponent } from '../component/consulterdetaitechange/consulterdetaitechange.component';
import { DashbordComponent } from '../component/dashbord/dashbord.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'test', component: NavComponent },
  { path: 'vente', component: VenteComponent },
  { path: 'echange', component: EchangeComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'user', component: UserComponent },
  { path: 'consulter', component: ConsulterVenteComponent },
  {path:'rapport',component:RapportComponent},
  {path:'ventedetait/:id',component:ConsulterdetaiventeComponent},
  {path:'echangedetait/:id',component:ConsulterdetaitechangeComponent},
  {path:'forum',component:FormulaireComponent},
  {path:'forum/:titre',component:ForumbytitreComponent},
  {path:'dashboard',component:DashbordComponent},
  {path: '**', component: LoginComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
