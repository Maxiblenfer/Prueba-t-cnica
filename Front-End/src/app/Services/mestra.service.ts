import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MestraService {

  constructor(private http:HttpClient) { }

  ObtenerTiposPersona():Observable<any>{
    const api="https://localhost:7066/api/Maestra/TipoDePersona";
    return this.http.get(api);
  }

  ObtenerTiposDeSangre():Observable<any>{
    const api="https://localhost:7066/api/Maestra/TipoDeSangre";
    return this.http.get(api);
  }
  ObtenerGeneros():Observable<any>{
    const api="https://localhost:7066/api/Maestra/Generos";
    return this.http.get(api);
  }
}
