import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './Components/Personas/lista/lista.component';
import { RegistroComponent } from './Components/Personas/registro/registro.component';
import { ActualizarComponent } from './Components/Personas/actualizar/actualizar.component';
import { RegistrarPacienteComponent } from './Components/Personas/registrar-paciente/registrar-paciente.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'inicio', component: ListaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'actualizar/:documento', component: ActualizarComponent },
  { path: 'RegistrarPaciente/:documento', component: RegistrarPacienteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
