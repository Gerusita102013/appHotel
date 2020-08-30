import { Component, ViewChild } from '@angular/core';
import { DepartamentoService } from '../service/departamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name:string;
  habitaciones: any [];
  habitaciones2: any [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  constructor(private departamentoService: DepartamentoService, private router :Router,
    private rute:ActivatedRoute ) {}

  ngOnInit(){
    this.obtenerDesocupados();
    this.obtenerOcupados();
    this.name= this.rute.snapshot.paramMap.get('nick');
  }
  
  obtenerDesocupados(){
    this.departamentoService.getDepartamentos('desocupado').then(data=>{
      this.habitaciones=data["habita"];
      console.log(this.habitaciones);
  })
}

obtenerOcupados(){
  this.departamentoService.getDepartamentos('ocupado').then(data=>{
    this.habitaciones2=data["habita"];
    console.log(this.habitaciones2);
})
}

borrar(){
  localStorage.removeItem('sesionlogin');
  this.router.navigate(['/login']);
}

options = {
  centeredSlides: true,
  loop: true,
  spaceBetween: -100,
};

}
