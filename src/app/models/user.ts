export class User{
    id:number;
	nom:String;
    prenom:String;
	tel:String;
	role:Role;
	adresse:Adresse;
	email:String;
	password:String;
}
export class Role{
    id:number;
    nom:String;
}
export class Adresse{
    block:String;
    appartement:String;
    type:String;
}