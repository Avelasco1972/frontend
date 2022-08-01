import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
proyec : Proyectos = null
  constructor(private sProyectos: SProyectosService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(
      data =>{
        this.proyec = data;
      }, err =>{
        alert("Error a modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.sProyectos.update(id, this.proyec).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modeficar proyecto");
        this.router.navigate(['']);
      }
    )
  }
  }

