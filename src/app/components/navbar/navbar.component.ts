import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tareaForm: FormGroup;

  constructor(private tf: FormBuilder, private router:Router, private toastr: ToastrService, private tareaService: TareaService ) {
    this.tareaForm = this.tf.group({
      tarea: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  guardarTarea(){

    const TAREA: Tarea = {
      tarea: this.tareaForm?.get('tarea')?.value,
    }
    console.log(TAREA);
    this.tareaService.guardarTarea(TAREA).subscribe(data =>{
      this.toastr.success('La tarea fue creada con exito', 'Nueva Tarea!');
      //ojo eliminar agregar al componente de nueva tarea
      this.router.navigate(['/']);
    },error =>{
      console.log(error);
      this.tareaForm.reset();
    }
    )
    
  }
}
