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
  detailMovies: any = [];
  id: string;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  constructor(private departamentoService: DepartamentoService, private router :Router,
    private rute:ActivatedRoute, ) {}

  ngOnInit(){
    
    this.obtenerDesocupados();
    this.obtenerOcupados();
    this.name= this.rute.snapshot.paramMap.get('nick');
    //this.habitaciones.length=0;
  }

/*   ionViewWillEnter() {
    this.obtenerDesocupados();
    this.obtenerOcupados();
} */
  
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

option = {
  slidesPerView: 1.5,
  spaceBetween: 0,
  centeredSlides: true,
};

}
