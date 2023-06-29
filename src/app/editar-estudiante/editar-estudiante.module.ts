import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEstudiantePageRoutingModule } from './editar-estudiante-routing.module';

import { EditarEstudiantePage } from './editar-estudiante.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEstudiantePageRoutingModule
  ],
  declarations: [EditarEstudiantePage]
})
export class EditarEstudiantePageModule {}
