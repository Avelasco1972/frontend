export class Educacion {
    id? : number;
    institutoC : string;
    tituloC : string;
    descripcionC : string;
    periodoC : string;
    logoC : string;

    constructor(institutoC: string, tituloC: string, descripcionC: string, periodoC: string, logoC: string){
        this.institutoC = institutoC;
        this.tituloC = tituloC;
        this.descripcionC = descripcionC;
        this.periodoC = periodoC;
        this.logoC = logoC;
    }
}
