//import * as internal from "stream";

export class reclam{
    id:string;
    matr_reclamant:string;
    etat_act: string;
    date : string;
    Id_sousCateg : string;
    urg : number;
    desc: string;
    matr_affect : string;
  

    constructor(id:string,matr_reclamant:string,etat_act: string,date: string ,Id_sousCateg : string,urg : number,desc?: string,matr_affect? : string){
        this.id=id;
        this.matr_reclamant=matr_reclamant;
        this.etat_act=etat_act;
        this.date=date;
        this.Id_sousCateg=Id_sousCateg;
        this.urg=urg;
        this.desc=desc;
        this.matr_affect=matr_affect;

    }
}