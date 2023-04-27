import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { ListaComponent } from './Components/Personas/lista/lista.component';
import { RegistroComponent } from './Components/Personas/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ActualizarComponent } from './Components/Personas/actualizar/actualizar.component';
import { RegistrarPacienteComponent } from './Components/Personas/registrar-paciente/registrar-paciente.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent,
    RegistroComponent,
    ActualizarComponent,
    RegistrarPacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
