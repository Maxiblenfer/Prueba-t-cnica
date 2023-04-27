import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { Observable } from 'rxjs';
import { rutaglobal } from '../Components/Shared/Global';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
rutaapi=rutaglobal;
  constructor(private http:HttpClient) { }

  RegistrarPersona( persona:Persona):Observable<any>{
const apiruta=`${this.rutaapi}Persona/Registrar`;
return this.http.post(apiruta,persona);
  }

  ObtenerPersonas():Observable<any>{
    const apiruta=`${this.rutaapi}Persona/Obtener`;
    return this.http.get(apiruta);
  }

  ObtenerPersona(documento:any):Observable<any>{
    console.log(documento);
    
    const apiruta=`${this.rutaapi}Persona/ObtenerPersona?documento=${documento}`;
    return this.http.get(apiruta);
  }

  ActualziarPersona(persona: Persona):Observable<any>{
    const apiruta=`${this.rutaapi}Persona/ActualizarPersona`;
    return this.http.put(apiruta,persona);
  }
}
