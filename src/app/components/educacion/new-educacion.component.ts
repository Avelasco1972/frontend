import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';


@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  institutoC: string = '';
  tituloC: string = '';
  descripcionC: string = '';
  periodoC: string = '';
  logoC: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.institutoC, this.tituloC, this.descripcionC, this.periodoC, this.logoC);
    this.sEducacion.save(edu).subscribe(Date=>{
      alert("Educacion Añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("fallo");
      this.router.navigate(['']);
    }
    )
  }
}


