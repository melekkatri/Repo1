import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  constructor(private utilisateur:UtilisateurService,private route: ActivatedRoute,private router: Router) { }
  role;
  matricule:string='';
  mdp:string='';
  lieu;
  wrong:boolean=false;
  ngOnInit(): void {
  }
  OnClick(){
    
    if(this.utilisateur.UserExists(this.matricule,this.mdp)){
      this.role=this.utilisateur.getUserRole(this.matricule);
      this.lieu=this.utilisateur.getUserLieu(this.matricule);
      localStorage.setItem('role',this.role);
      localStorage.setItem('matricule',this.matricule);
      localStorage.setItem('gouvernorat',this.lieu[0]);
      localStorage.setItem('ville',this.lieu[1]);
      localStorage.setItem('agence',this.lieu[2]);
      this.router.navigate(['/acceuil']);
    }
    else{
      this.wrong=true;
    }
  }
}
