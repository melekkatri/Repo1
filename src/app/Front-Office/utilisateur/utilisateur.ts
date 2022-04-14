export class utilisateur{
    private Id: string;
private matr : string;
private mdp: string;
private nom: string;
private prenom : string;
private num_tel: number;
private email : string;
private id_role : string;
private id_lieu :string;
  constructor( Id: string,matr : string,mdp: string,nom: string,prenom : string,num_tel: number,email : string, id_role: string, id_lieu: string) {
    this.Id=Id;
    this.matr=matr;
    this.mdp=mdp;
    this.nom=nom;
    this.prenom=prenom;
    this.num_tel=num_tel;
    this.email=email;
    this.id_role=id_role;
    this.id_lieu=id_lieu;
   }

get Matr(){
  return this.matr;
}
get Mdp(){
  return this.mdp;
}
get Id_role(){
  return this.id_role;
}
get Id_lieu(){
  return this.id_lieu;
}


}


