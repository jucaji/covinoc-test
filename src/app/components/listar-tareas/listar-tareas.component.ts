import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';


@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {

  listTareas: Tarea[] = [];

  constructor(private _tareaService: TareaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }
  obtenerTareas(){
    this._tareaService.getTareas().subscribe(data => {
      console.log(data);
      this.listTareas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarTarea(id: any){
    this._tareaService.eliminarTarea(id).subscribe(data =>{
      this.toastr.error('La tarea fue eliminada con exito','Tarea Eliminada');
      this.obtenerTareas();
    })
  }

}
