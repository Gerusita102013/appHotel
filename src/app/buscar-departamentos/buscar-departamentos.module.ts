import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarDepartamentosPageRoutingModule } from './buscar-departamentos-routing.module';

import { BuscarDepartamentosPage } from './buscar-departamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarDepartamentosPageRoutingModule
  ],
  declarations: [BuscarDepartamentosPage]
})
export class BuscarDepartamentosPageModule {}
