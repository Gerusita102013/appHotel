import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoService } from '../service/departamento.service';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.page.html',
  styleUrls: ['./reservacion.page.scss'],
})
export class ReservacionPage implements OnInit {

  name:string;
  lista:any;
  listaTipodeHabitaciones:any;
  listaTipodeHabitaciones2: any = [];

  constructor(private rute:ActivatedRoute,private departamentoService:DepartamentoService, private router:Router) { }

  ngOnInit() {
    this.name= this.rute.snapshot.paramMap.get('nick');
    this.obtenerListaR();
  }

  obtenerListaR(){
      this.departamentoService.getListaReservaciones(localStorage.getItem ('idUser')).then(data=>{
        this.lista=data[1];
        console.log(this.lista);
        //this.listaTipodeHabitaciones=data[3];
        //console.log( this.listaTipodeHabitaciones);
    })
  }

  eliminarR(id:string){
    this.departamentoService.getEliminarReservacion(id).then(data=>{
      this.obtenerListaR();
      console.log(this.lista);
      //this.listaTipodeHabitaciones=data[3];
      console.log( this.listaTipodeHabitaciones);
   }) 
}
}

