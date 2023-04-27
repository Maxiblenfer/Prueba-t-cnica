import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from 'src/app/models/Persona';
import { MestraService } from '../../../Services/mestra.service';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/Services/paciente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css'],
})
export class RegistrarPacienteComponent implements OnInit {
  formulario!: FormGroup;
  TiposDeSangre: string[] = [];
  persona!: any;
  mostrarFormulario: boolean = false;
  Tipos: string[] = [];
  documento: string = '';
  constructor(
    private Route: ActivatedRoute,
    private personaservicio: PersonaService,
    private router: Router,
    private fb: FormBuilder,
    private maestraservice: MestraService,
    private pacientes: PacienteService,
    private toast: ToastrService
  ) {
    this.formulario = fb.group({
      tipodesangre: ['', Validators.required],
      salario: ['', Validators.required],
      usuario: ['', Validators.required],
      condicion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.Route.params.subscribe((params) => {
      this.documento = params['documento'];
      this.obtenerTiposDesSangre();
    });
  }
  RegistrarPaciente() {
    if (this.formulario.valid) {
      const paciente: Paciente = {
        FKID: this.documento,
        tipodesangre: this.formulario.value.tipodesangre,
        salario: this.formulario.value.salario.toString(),
        usuario: this.formulario.value.usuario,
        condicion: this.formulario.value.condicion,
      };
      console.log(paciente);
      this.pacientes.RegistrarPaciente(paciente).subscribe(
        (data) => {
          console.log(data);
          this.toast.success(
            'Se ha registrado al paciente exitosamente',
            'Registro exitoso'
          );
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
          this.toast.error(
            'Ha ocurrido un error al registrar al paciente',
            'Error'
          );
        }
      );
    }
  }
  obtenerTiposDesSangre() {
    this.maestraservice.ObtenerTiposDeSangre().subscribe((data) => {
      this.TiposDeSangre = data;
    });
  }
}
