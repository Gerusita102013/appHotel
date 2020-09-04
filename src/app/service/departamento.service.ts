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

  getDepartamentosDetail(id: string){
    let url='http://127.0.0.1:8000/api/buscarHabitacion/'+id;
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }

  buscarDepartamentos(nombrehabitacion: string){
    let url='http://127.0.0.1:8000/api/resultado/'+nombrehabitacion;
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }

  getReservaciones(habitacion_id:string){
    let url='http://127.0.0.1:8000/api/reservacion/'+ habitacion_id;
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }


  addReservaciones(data:any){
    debugger
    let url='http://127.0.0.1:8000/api/reservacion/';
    debugger
    return new Promise((resolve, reject)=>{
      this.http.post(url,data).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }

  getListaReservaciones(id:string){
    debugger
    let url='http://127.0.0.1:8000/api/prueba/'+ id;
    debugger
    return new Promise((resolve, reject)=>{
      this.http.get(url).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }

  EliminarReservacion(data:any){
    debugger
    let url='http://127.0.0.1:8000/api/eliminar/';
    debugger
    return new Promise((resolve, reject)=>{
      this.http.post(url, data).subscribe(res=>{
        resolve(res);
      },error=>{
        reject(error); 
      })
    })
  }

}
