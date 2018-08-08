import { VenteService } from './service/vente/vente.service';
import { ConsulterService } from './service/consulter/consulter.service';
import { UserService } from './service/user/user.service';
import { AdduserService } from './service/adduser/adduser.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';

import { VenteComponent } from './component/annonces/vente/vente.component';
import { EchangeComponent } from './component/annonces/echange/echange.component';
import { ConsulterVenteComponent } from './component/annonces/consulter-vente/consulter-vente.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AutheticationService } from './service/authentication/authetication.service';
import { UserComponent } from './component/user/user.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { RapportComponent } from './component/rapport/rapport.component';
import { TabsModule } from 'ngx-bootstrap';
import { EchangeService } from './service/echange/echange.service';
import { ConsulterdetaiventeComponent } from './component/consulterdetaivente/consulterdetaivente.component';
import { ConsulterdetaitechangeComponent } from './component/consulterdetaitechange/consulterdetaitechange.component';
import { ForumService } from './service/forum/forum.service';
import { ModalModule } from 'ngx-bootstrap';
import { ForumbytitreComponent } from './component/forumbytitre/forumbytitre.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashbordComponent } from './component/dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    VenteComponent,
    EchangeComponent,
    ConsulterVenteComponent,
    AddUserComponent,
    UserComponent,
    FormulaireComponent,
    RapportComponent,
    ConsulterdetaiventeComponent,
    ConsulterdetaitechangeComponent,
    ForumbytitreComponent,
    DashbordComponent
    
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [AutheticationService,AdduserService,UserService,ConsulterService,VenteService,EchangeService,ForumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
