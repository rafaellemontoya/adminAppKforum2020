import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { ClasificacionEquipoComponent } from './pages/clasificacion-equipo/clasificacion-equipo.component';
import { NuevaClasificacionEquipoComponent } from './pages/nueva-clasificacion-equipo/nueva-clasificacion-equipo.component';
import { NuevoDanoComponent } from './pages/nuevo-dano/nuevo-dano.component';
import { NuevoMaterialComponent } from './pages/nuevo-material/nuevo-material.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { TipoDanoComponent } from './pages/tipo-dano/tipo-dano.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardVentasComponent } from './pages/dashboard-ventas/dashboard-ventas.component';
import { DashboardAvisosComponent } from './pages/dashboard-avisos/dashboard-avisos.component';
import { DashboardVideoComponent } from './pages/dashboard-video/dashboard-video.component';
import { DashboardCobranzaComponent } from './pages/dashboard-cobranza/dashboard-cobranza.component';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { EditarMaterialComponent } from './pages/editar-materiales/editar-materiales.component';
import { EditarProyectosComponent } from './pages/editar-proyectos/editar-proyectos.component';
import { EditarTipoDanoComponent } from './pages/editar-tipo-dano/editar-tipo-dano.component';
import { EditarClasificacionEquipoComponent } from './pages/editar-clasificacion-equipo/editar-clasificacion-equipo.component';
import { ReportesEnvioComponent } from './pages/reportes-envio/reportes-envio.component';
import { ReportesDevolucionComponent } from './pages/reportes-devolucion/reportes-devolucion.component';
import { ReportesSeguimientoComponent } from './pages/reportes-seguimiento/reportes-seguimiento.component';
import { ReportesCapacitacionComponent } from './pages/reportes-capacitacion/reportes-capacitacion.component';
import { ReportesDanoComponent } from './pages/reportes-dano/reportes-dano.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { UsersComponent } from './pages/users/users.component';
import { NuevaNotificacionComponent } from './pages/nueva-notificacion/nueva-notificacion.component';
import { NuevoUserComponent } from './pages/nuevo-user/nuevo-user.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuariosComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    NuevoClienteComponent,
    NuevoProyectoComponent,
    ClasificacionEquipoComponent,
    NuevaClasificacionEquipoComponent,
    NuevoDanoComponent,
    NuevoMaterialComponent,
    ClientesComponent,
    ProyectosComponent,
    MaterialesComponent,
    TipoDanoComponent,
    DashboardComponent,
    DashboardVentasComponent,
    DashboardAvisosComponent,
    DashboardVideoComponent,
    DashboardCobranzaComponent,
    EditarClienteComponent,
    EditarMaterialComponent,
    EditarProyectosComponent,
    EditarTipoDanoComponent,
    EditarClasificacionEquipoComponent,
    ReportesEnvioComponent,
    ReportesDevolucionComponent,
    ReportesSeguimientoComponent,
    ReportesCapacitacionComponent,
    ReportesDanoComponent,
    AgendaComponent,
    MenuComponent,
    NotificacionesComponent,
    SpeakersComponent,
    UsersComponent,
    NuevaNotificacionComponent,
    NuevoUserComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'dokaSistema'),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    HttpClientModule,
     RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [AngularFirestore, AngularFireStorageModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
