import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class SProyectosService {
 // proyeURL = 'http://localhost:8080/proyec/';
 proyeURL = 'https://backend-velascoangel.herokuapp.com/proyec/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proyeURL + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proyeURL + `detail/${id}`);
  } 

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.proyeURL + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.proyeURL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proyeURL + `delete/${id}`);
  }
}
