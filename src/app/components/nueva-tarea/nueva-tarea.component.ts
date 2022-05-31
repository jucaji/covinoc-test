import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {
  tareaForm: FormGroup;

  constructor(private tf: FormBuilder) {
    this.tareaForm = this.tf.group({
      tarea: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }   
}
