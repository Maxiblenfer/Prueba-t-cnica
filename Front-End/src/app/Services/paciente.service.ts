import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../models/Paciente';
import { Observable } from 'rxjs';
import { rutaglobal } from '../Components/Shared/Global';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
rutaapi=rutaglobal;
  constructor(private http:HttpClient) { }

  RegistrarPaciente( paciente:Paciente):Observable<any>{
const api=`${this.rutaapi}Paciente/Registrar`;
return this.http.post(api,paciente);
  }
}
