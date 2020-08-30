import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DepartamentoService } from '../service/departamento.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  nombre:string;
  name:string;
  detailMovies: any = [];
  id: string;
  toastController: any;

  constructor(private departamentoService:DepartamentoService,
    private router:ActivatedRoute,
    private router2 :Router,
    private rute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.router.snapshot.paramMap.get('id');
    this.getDetailDepartamento();
    this.name= this.rute.snapshot.paramMap.get('nick');
  }

  getDetailDepartamento(){
    debugger
    this.departamentoService.getDepartamentosDetail(this.id).then(data =>{
      debugger
      this.detailMovies=data["buscarHabita"];
      console.log(this.detailMovies);
    }).catch(error=>{
    })
  }


  borrar(){
    localStorage.removeItem('sesionlogin');
    this.router2.navigate(['/login']);
  }
}
