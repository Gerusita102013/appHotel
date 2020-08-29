import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarDepartamentosPage } from './buscar-departamentos.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarDepartamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarDepartamentosPageRoutingModule {}
