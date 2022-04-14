import { Component, OnInit } from '@angular/core';
import { FullComponent } from '../../reclamation/full/full.component';
import { reclam } from '../../reclamation/reclam';
import { RecServiceService } from '../../reclamation/rec-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import {  OnDestroy } from '@angular/core';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-rec-details',
  templateUrl: './rec-details.component.html',
  styleUrls: ['./rec-details.component.css']
})
export class RecDetailsComponent implements OnInit{ //, OnDestroy {
  id!: string;
  private sub: any;
  role
  matricule
  recIds
  constructor(private route: ActivatedRoute, private recService:RecServiceService) {
    //this.recIds=this.recService.getReclamsOfUser(this.matricule);
    
    
  }
  //<full [ident]="id"></full>
  ngOnInit() {
    this.role=localStorage.getItem('role');
    this.matricule=localStorage.getItem('matricule');
    console.log("this is matr",this.matricule);
    this.recIds=this.recService.getReclamsOfUser(this.matricule);
    console.log(this.recIds);
    //this.sub = this.route.params.subscribe(params => {
       //this.id = params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       
    //});
    
  }
  
  
  
  //ngOnDestroy() {
    //this.sub.unsubscribe();
  //}

  
}
