import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DepartamentoService } from '../service/departamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from "@angular/common";



@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  nombre:string;
  name:string;
  comentario:any[]=[];
  detailMovies: any = [];
  id: string;
  toastController: any;
  verReservacion:boolean= false;

  fecha_entrada:Date;
  fecha_salida:Date;
  habitacion_id:string;

  fech_tranfor:Date;
  date = new Date();



  constructor(private departamentoService:DepartamentoService,
    private router:ActivatedRoute,
    private router2 :Router,
    private rute:ActivatedRoute,
    private datePipe: DatePipe,
    private toast:ToastController) { }

  ngOnInit() {
    this.id=this.router.snapshot.paramMap.get('id');
    this.getDetailDepartamento();
    this.name= this.rute.snapshot.paramMap.get('nick');
  }

  async mensaje(msj:string) {
    const toast = await this.toast.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }

  getDetailDepartamento(){
    this.departamentoService.getDepartamentosDetail(this.id).then(data =>{
      this.detailMovies=data["buscarHabita"];
      console.log(this.detailMovies);
    }).catch(error=>{
    })
  }

  borrar(){
    localStorage.removeItem('sesionlogin');
    this.router2.navigate(['/login']);
  }


verReserv(){
  this.verReservacion=!this.verReservacion;
  }

  form = new FormGroup({
    fecha_entrada: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fecha_salida: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  Reservar(){
    console.log(this.datePipe.transform(this.fecha_entrada, "yyyy-MM-dd"));
    let datos={
      'fecha_entrada':this.datePipe.transform(this.fecha_entrada, "yyyy-MM-dd"),
      'fecha_salida':this.datePipe.transform(this.fecha_salida, "yyyy-MM-dd"),
      'habitacion_id':this.id,
      'users_id':localStorage.getItem('idUser')
    }
    this.departamentoService.addReservaciones(datos).then(data =>{
    
    }).catch(error=>{
    })
    this.router2.navigate(['/home/:nick']);}
}
