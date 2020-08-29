import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  getDepartamentos(estado: string){
    let url='http://127.0.0.1:8000/api/obtenerHabitaciones/'+estado;
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }
}