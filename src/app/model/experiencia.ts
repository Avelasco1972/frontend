export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    anio_ingresoE : string;
    anio_egresoE : string;
    iconoE : string;

    constructor(nombreE: string, descripcionE: string, anio_ingresoE: string, anio_egresoE: string, iconoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.anio_ingresoE = anio_egresoE;
        this.anio_ingresoE = anio_egresoE;
        this.anio_egresoE = anio_egresoE;
        this.iconoE = iconoE;

    }
}
