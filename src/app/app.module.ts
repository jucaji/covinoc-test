import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { ListSearchComponent } from './components/list-search/list-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    ListarTareasComponent,
    HeaderComponent,
    PaginacionComponent,
    ListSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
