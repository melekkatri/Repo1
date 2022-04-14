import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './Front-Office/reclamation/full/full.component';
import { ReducedComponent } from './Front-Office/reclamation/reduced/reduced.component';
import { EtatComponent } from './Front-Office/reclamation/etat/etat.component';
import { NavbarComponent } from './Front-Office/pages/navbar/navbar.component';
import { AcceuilComponent } from './Front-Office/pages/acceuil/acceuil.component';
import { ContactComponent } from './Front-Office/pages/contact/contact.component';
import { NewRecComponent } from './Front-Office/pages/new-rec/new-rec.component';
import { RecDetailsComponent } from './Front-Office/pages/rec-details/rec-details.component';
import { RecServiceService } from './Front-Office/reclamation/rec-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmplacementService } from './Front-Office/pages/new-rec/emplacement.service';
import { HeaderComponent } from './Front-Office/pages/acceuil/header/header.component';
import { UtilisateurComponent } from './Front-Office/utilisateur/utilisateur/utilisateur.component';
import { AuthentificationComponent } from './Front-Office/pages/authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ReducedComponent,
    EtatComponent,
    NavbarComponent,
    AcceuilComponent,
    ContactComponent,
    NewRecComponent,
    RecDetailsComponent,
    HeaderComponent,
    UtilisateurComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    RecServiceService,
    EmplacementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
