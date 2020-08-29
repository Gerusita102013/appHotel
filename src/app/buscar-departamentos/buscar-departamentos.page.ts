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
  
  ngOnInit() {
    this.name= this.rute.snapshot.paramMap.get('name');
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

  getDepartamentos(event){
    if(this.peli!=this.nombreBusqueda){
      this.listMovies.length=0;
      this.nombreBusqueda=this.peli;
      this.numberPage=1;
    }

    
    this.departamentoService.getDepartamentos(this.peli).then(correcto=>{
      console.log("movies", correcto["results"]);
      for(let i=0; i<correcto["results"].length; i++){
        this.listMovies.push(correcto["results"][i]);
        this.mensaje();

      }
      
      if(this.listMovies.length == 200){
        event.target.disabled = true;
        
      }
      event.target.complete();
      this.numberPage++;
     }).catch(error =>{
     })
  }

  borrar(){
    localStorage.removeItem('sesionlogin');
    this.router2.navigate(['/login']);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
