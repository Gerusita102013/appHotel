import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  login:any=false;
  constructor(private router:Router) { }

  canActivate(){
    this.login=localStorage.getItem("sesionlogin");
    //console.log(localStorage.getItem("sesionlogin"));
    if(!this.login){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
