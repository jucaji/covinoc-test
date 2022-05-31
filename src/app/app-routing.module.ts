import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';


const routes: Routes = [
  { path: '', component: ListarTareasComponent},
  { path: '', component: NuevaTareaComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
