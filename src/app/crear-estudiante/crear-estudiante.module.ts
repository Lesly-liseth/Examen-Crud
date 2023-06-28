import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CrearEstudiantePageRoutingModule } from './crear-estudiante-routing.module';

import { CrearEstudiantePage } from './crear-estudiante.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CrearEstudiantePageRoutingModule
  ],
  declarations: [CrearEstudiantePage]
})
export class CrearEstudiantePageModule { }