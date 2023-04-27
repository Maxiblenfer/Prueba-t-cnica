import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  personas: any[] = [];

  constructor(private personaservice: PersonaService) {}
  ObtenerPersonas() {
    this.personaservice.ObtenerPersonas().subscribe(
      (data) => {
        this.personas = data;
        
      },
      (error) => {
       
      }
    );
  }
  ngOnInit(): void {
    this.ObtenerPersonas();
  }
}
