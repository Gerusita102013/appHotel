import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private login:LoginService,private ruta:Router, private toast:ToastController) { }
  user:any[];
  mail:string;
  pass:string;
  id:string;

  ngOnInit() {
  }

  async mensaje(msj:string) {
    const toast = await this.toast.create({
      message: msj,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  async mensajecorrecto(msj:string) {
    const toast = await this.toast.create({
      message: msj,
      color: 'warning',

      duration: 2000,
    });
    toast.present();
  }

  logeo(){
    if (this.mail==null || this.pass==null) {
      this.mail=null;
      this.pass=null; 
      this.mensaje('Usuario y contraseña vacios');
    }
    
    this.login.logeo(this.mail,this.pass).then(data =>{
      
      this.user=data['register'];
      this.mail=null;
      this.pass=null;

      for (let i = 0; i < this.user.length; i++) {
        this.id = data["register"][i].id;
      }
      console.log(this.id);
        localStorage.setItem('idUser', this.id)
        localStorage.setItem('sesionlogin','true')

        this.ruta.navigate(['/inicio/'+this.user[0].name])
        this.mensajecorrecto('Welcome');
    })
    .catch(error =>{
      console.log(error);
    })
  }
    
}
