import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from 'src/app/models/Persona';
import { MestraService } from '../../../Services/mestra.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
})
export class ActualizarComponent implements OnInit {
  formactualizar!: FormGroup;
  fechabaja!: Date;
  fechanacimiento!: Date;
  persona!:Persona;
  mostrarFormulario: boolean = false;
  Tipos: string[] = [];
  constructor(
    private Route: ActivatedRoute,
    private personaservicio: PersonaService,
    private router: Router,
    private fb: FormBuilder,
    private maestra: MestraService,
    private toast:ToastrService
  ) {
    this.ObtenerTipos();
  }

  ngOnInit(): void {
    this.Route.params
      .pipe(
        switchMap((param) =>
          this.personaservicio.ObtenerPersona(param['documento'])
        )
      )
      .subscribe(
        (data) => {
          if (data == null) {
            this.router.navigate(['']);
          } else {
            this.fechabaja = new Date(data.fechabaja);
            this.persona=data;
            console.log(this.fechabaja);
            this.fechanacimiento = new Date(data.fechanacimiento);
            this.formactualizar = this.fb.group({
              nombres: [
                data.nombres,
                [Validators.required, Validators.maxLength(60)],
              ],
              apellidos: [
                data.apellidos,
                [Validators.required, Validators.maxLength(60)],
              ],
              fechanacimiento: [data.fechanacimiento, Validators.required],
              descripcion: [data.descripcion, Validators.required],
              fechabaja: [data.fechabaja, Validators.required],
              usuario: [
                data.usuario,
                [Validators.required, Validators.maxLength(150)],
              ],
              direccion: [
                data.direccion,
                [Validators.required, Validators.maxLength(200)],
              ],
              tipo: [data.tipo],
              telefono: [
                data.telefonofijo,
                [Validators.required, Validators.maxLength(20)],
              ],
              movil: [
                data.telefonomovil,
                [Validators.required, Validators.maxLength(20)],
              ],
              email: [
                data.email,
                [Validators.required, Validators.maxLength(200)],
              ],
              genero: [data.genero],
            });
          }
          this.mostrarFormulario = true;
        },
        (error) => {
          this.router.navigate(['']);
        }
      );
  }
  ActualizarPersona() {
    const PersonaActualizar: Persona = {
      id:0,
      documento: this.persona.documento,
      nombres: this.formactualizar.value.nombres,
      apellidos: this.formactualizar.value.apellidos,
      fechanacimiento: this.formactualizar.value.fechanacimiento,
      descripcion: this.formactualizar.value.descripcion,
      fechabaja: this.formactualizar.value.fechabaja,
      usuario: this.formactualizar.value.usuario,
      direccion: this.formactualizar.value.direccion,
      telefonofijo: this.formactualizar.value.telefono,
      telefonomovil: this.formactualizar.value.movil,
      email: this.formactualizar.value.email,
      tipo: this.formactualizar.value.tipo,
      genero: this.formactualizar.value.genero,
    };
    console.log(PersonaActualizar);
    
  this.personaservicio.ActualziarPersona(PersonaActualizar).subscribe(data=>{
    console.log(data);
    this.toast.success("Se han actualizado los datos del usuario exitosamente","Usuario actualziado");

    this.router.navigate([""]);
  },error=>{
    console.log(error);
    this.toast.error("Ha courrido un error","Error");
  })
    
  }
  ObtenerTipos(): string[] {
    this.maestra.ObtenerTiposPersona().subscribe((data) => {
      this.Tipos = data;
    });
    return this.Tipos;
  }
}
