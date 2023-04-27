import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MestraService } from 'src/app/Services/mestra.service';
import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;
  Tipos: string[] = [];
  Generos: string[] = [];
  constructor(
    private fb: FormBuilder,
    private personaservice: PersonaService,
    private toast: ToastrService,
    private router: Router,
    private maestra: MestraService
  ) {
    this.formulario = fb.group({
      documento: ['', [Validators.required, Validators.maxLength(20)]],
      nombres: ['', [Validators.required, Validators.maxLength(60)]],
      apellidos: ['', [Validators.required, Validators.maxLength(60)]],
      fechanacimiento: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechabaja: ['', Validators.required],
      usuario: ['', [Validators.required, Validators.maxLength(150)]],
      direccion: ['', [Validators.required, Validators.maxLength(200)]],
      tipo: [''],
      telefono: ['', [Validators.required, Validators.maxLength(20)]],
      movil: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(200)]],
      genero: [''],
    });
  }

  ngOnInit(): void {
    this.ObtenerTipos();
    this.ObtenerGeneros();
  }
  ObtenerTipos() {
    this.maestra.ObtenerTiposPersona().subscribe((data) => {
      this.Tipos = data;
    });
  }
  ObtenerGeneros() {
    this.maestra.ObtenerGeneros().subscribe((data) => {
      this.Generos = data;
    });
  }
  RegistrarPersona() {
    if (!this.formulario.invalid) {
      const personaRegistrar: Persona = {
        id: 0,
        documento: this.formulario.value.documento,
        nombres: this.formulario.value.nombres,
        apellidos: this.formulario.value.apellidos,
        fechanacimiento: this.formulario.value.fechanacimiento,
        descripcion: this.formulario.value.descripcion,
        fechabaja: this.formulario.value.fechabaja,
        usuario: this.formulario.value.usuario,
        direccion: this.formulario.value.direccion,
        telefonofijo: this.formulario.value.telefono,
        telefonomovil: this.formulario.value.movil,
        email: this.formulario.value.email,
        tipo: this.formulario.value.tipo,
        genero: this.formulario.value.genero,
      };

      this.personaservice.RegistrarPersona(personaRegistrar).subscribe(
        (data) => {
          this.toast.success(
            'Persona registrada exirosamente',
            'Registro exitoso'
          );
          this.router.navigate(['']);
        },
        (error) => {
          if (error.error.message == 'repetido') {
            this.toast.error(
              'Error, el documento ya está registrado',
              'Docuemnto repetido'
            );
          }
        }
      );
    }
  }
}
