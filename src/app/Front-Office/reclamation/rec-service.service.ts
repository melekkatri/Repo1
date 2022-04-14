import { Injectable } from '@angular/core';

import { reclam } from './reclam';

@Injectable({
  providedIn: 'root'
})
export class RecServiceService {
   R0= new reclam("","","","","",0);
   T: Array<reclam> = [
    new reclam("1","1234","en attente","12/04/2022","15",1),
    new reclam("2","1234","affectée","12/04/2022","23",3,"abcd","5678"),
    new reclam("3","5678","en cours de traitement","15/01/2022","42",2,"abcd","5678"),
    new reclam("4","9090","traitée","16/02/2021","36",1,"abcd","5678")
]
  constructor() {
    
   }

   getReclamsOfUser(matr:string){
     var r: Array<string> = [];
     for(let i=0;i< this.T.length;i++){
      if(this.T[i].matr_reclamant==matr){
        r.push(this.T[i].id)
      }
     }
     return r;
   }

   saveNew(data){
     console.log(data);
   }

    getRecDet(ident:string){

      const found = this.T.find(element => element.id == ident);
      if (typeof found == undefined){
        return this.R0;
        console.log("service rec");
      } else {
        var r= <reclam> found ;
        return r;
      }
   }
   IdExists(ident:string){
    const found = this.T.find(element => element.id == ident);
    if (typeof found == undefined){
      return false;
    } else {
      return true;
    }
   }
  

   
   getRec(){
      return this.T;
   }

  

}
