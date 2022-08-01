export class Proyectos {
    id?: number;
    nombreP: string;
    descripcionP: string;
    logoP: string;

    constructor(nombreP: string, descripcionP: string, logoP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.logoP = logoP;
    }

}
