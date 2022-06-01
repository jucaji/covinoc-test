import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaService {
  url = 'http://localhost:4000/api/tareas/'

  constructor(private http:HttpClient) { }

  getTareas():Observable<any>{
    return this.http.get(this.url)
  }

  eliminarTarea(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarTarea(tarea:Tarea): Observable<any>{
    return this.http.post(this.url, tarea);
  }
  
}
