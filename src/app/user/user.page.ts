import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ToastController } from '@ionic/angular';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user:any[]=[];
  constructor(private userService:UserService,
              private toast:ToastController,
              private router:Router) { }

  ngOnInit() {
  }

  async mensaje(msj:string) {
    const toast = await this.toast.create({
      message: msj,
      duration: 2000,
      color: 'danger'

    });
    toast.present();
  }

  addUsuario(){
    if(this.user['usuario'] == null || this.user['apellido'] == null||this.user['corre'] == null || this.user['password'] == null)
      {
          this.user['usuario'] = '';
          this.user['apellido'] = '';
          this.user['corre'] = '';
          this.user['password'] = '';
      }
    
  this.userService.addUser(this.user).then(data=>{
    this.user['usuario'] = '';
    this.user['apellido'] = '';
    this.user['corre'] = '';
    this.user['password'] = '';
    this.mensaje(data['mensaje']);
    }).catch(erro=>{
      this.mensaje('error al enviar la peticion');
    })
  }
  }
