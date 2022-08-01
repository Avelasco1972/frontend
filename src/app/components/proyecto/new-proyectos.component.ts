import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  logoP: string = '';

  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proye = new Proyectos(this.nombreP, this.descripcionP, this.logoP);
    this.sProyectos.save(proye).subscribe(
      data => {
        alert("Proyecto Añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }

}
