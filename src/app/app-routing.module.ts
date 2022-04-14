import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from 'src/app/Front-Office/pages/acceuil/acceuil.component';
import { ContactComponent } from 'src/app/Front-Office/pages/contact/contact.component';
import { NewRecComponent } from 'src/app/Front-Office/pages/new-rec/new-rec.component';
import { RecDetailsComponent } from 'src/app/Front-Office/pages/rec-details/rec-details.component';
import { AuthentificationComponent } from './Front-Office/pages/authentification/authentification.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:AuthentificationComponent},
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'nouvelle-reclamation', component: NewRecComponent },
  { path: 'reclamation-details', component: RecDetailsComponent },
  { path: 'reclamation-details/:id', component: RecDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
