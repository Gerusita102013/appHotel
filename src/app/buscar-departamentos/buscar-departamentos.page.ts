import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartamentoService } from '../service/departamento.service'; 
import { IonInfiniteScroll } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buscar-departamentos',
  templateUrl: './buscar-departamentos.page.html',
  styleUrls: ['./buscar-departamentos.page.scss'],
})
export class BuscarDepartamentosPage implements OnInit {
  peli:string;
  numberPage:number=1;
  name:string;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  constructor(private departamentoService:DepartamentoService, 
              private router2 :Router,  
              private toast:ToastController,
              private rute:ActivatedRoute) { }
  listMovies:any=[];
  nombreBusqueda:string;
  habitaciones: any [];
  
  ngOnInit() {
    this.name= this.rute.snapshot.paramMap.get('nick');
  }

  async mensaje() {
    const toast = await this.toast.create({
      message:'DEPARTAMENTOS ENCONTRADOS',
      duration: 2000,
      cssClass:'iontoast',
      color: 'warning',
    });
    toast.present();
  }

  getDepartamentos(){
    
      this.listMovies.length=0;
    
    debugger
    this.departamentoService.buscarDepartamentos(this.peli).then(correcto=>{
      for(let i=0; i<correcto["resultado"].length; i++){
        this.listMovies.push(correcto["resultado"][i]);
        this.mensaje();
      }
     }).catch(error =>{
     })
  }
}
