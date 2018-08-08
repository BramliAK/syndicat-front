export class Forum{
    id:number;
    titre:String;
    disscution:Array<Disscution>;
    date:String;
}
export class Disscution{
    id:number;
    iduser:number;
    commentaire:String;
}