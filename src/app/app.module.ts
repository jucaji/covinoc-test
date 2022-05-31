import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginacionComponent } from './components/paginacion/paginacion.component';
import { ListSearchComponent } from './components/list-search/list-search.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    ListarTareasComponent,
    HeaderComponent,
    PaginacionComponent,
    ListSearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
