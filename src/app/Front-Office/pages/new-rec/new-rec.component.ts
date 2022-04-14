import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { RecServiceService } from '../../reclamation/rec-service.service';
import { UtilisateurService } from '../../utilisateur/utilisateur.service';
//import { UtilisateurValidators } from '../../utilisateur/utilisateur.validators';
//import { DescriptionValidators } from './Description.Validators';
//import { EmplacementService } from './emplacement.service';
import { CategorieService } from './categorie.service';
@Component({
  selector: 'app-new-rec',
  templateUrl: './new-rec.component.html',
  styleUrls: ['./new-rec.component.css']
})
export class NewRecComponent implements OnInit {
  matricule;
  gouvernorat;
  ville;
  agence;
  wrong: boolean=false;
  

  constructor(private categorie: CategorieService, private userService: UtilisateurService, private recService: RecServiceService, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.matricule=localStorage.getItem('matricule');
    this.gouvernorat=localStorage.getItem('gouvernorat');
    this.ville=localStorage.getItem('ville');
    this.agence=localStorage.getItem('agence');
    this.cat=this.categorie.categorie();
    this.form = this.fb.group({  
      matricule: this.matricule,
      gouvernorat: this.gouvernorat,
      ville: this.ville,
      agence: this.agence,
      categ: this.categ,
      sousCateg: this.sousCateg,
      description: this.description,
      urgence:this.urgence
  });  
  }
  

  cat : any = [];
  souscat : any = [];

  onSelect3(cat){
    this.souscat=this.categorie.souscategorie().filter(e=> e.id==cat.target.value);
  }

 

 

  DescRequirement(s){
    if(s.target.value=="Autre"){
      this.form.get('description').setValidators(Validators.required);
      console.log(this.form.get('description').validator);
    }
  }


  form = new FormGroup({

    categ : new FormControl('',Validators.required),
    sousCateg : new FormControl('',Validators.required),
    description : new FormControl('',Validators.max(15)),
    urgence : new FormControl
  })

  

  get description(){
    return this.form.get('description');
  }
  get urgence(){
    return this.form.get('urgence');
  }

  
  get categ(){
    return this.form.get('categ');
  }
  get sousCateg(){
    return this.form.get('sousCateg');
  }

  saveNew(value) {  
    if(this.categ.valid && this.sousCateg.valid && this.description.valid)
    this.recService.saveNew(value);  
    else {
      this.wrong=true;
    }
} 

}
