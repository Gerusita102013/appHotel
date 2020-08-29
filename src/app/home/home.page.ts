import { Component } from '@angular/core';
import { DepartamentoService } from '../service/departamento.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  habitaciones: any [];

  constructor(private departamentoService: DepartamentoService) {}

  obtenerDesocupados(){
    this.departamentoService.getDepartamentos('desocupado').then(data=>{
      this.habitaciones=data["habita"];
      console.log(this.habitaciones);
  })
}
}
