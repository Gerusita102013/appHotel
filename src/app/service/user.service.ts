import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  
  addUser(user:any){
    const parametros =new HttpParams()
    .set('name', user.usuario)
    .set('apellido', user.apellido)
    .set('correo', user.corre)
    .set('password', user.password)
    let url='http://127.0.0.1:8000/api/user';
    return new Promise((resolve, reject)=>{
      this.http.post(url, parametros).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }
}
