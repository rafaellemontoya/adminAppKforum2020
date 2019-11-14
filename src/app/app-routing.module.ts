import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { NuevoProyectoComponent } from './pages/nuevo-proyecto/nuevo-proyecto.component';
import { NuevoDanoComponent } from './pages/nuevo-dano/nuevo-dano.component';
import { NuevaClasificacionEquipoComponent } from './pages/nueva-clasificacion-equipo/nueva-clasificacion-equipo.component';
import { NuevoMaterialComponent } from './pages/nuevo-material/nuevo-material.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ClasificacionEquipoComponent } from './pages/clasificacion-equipo/clasificacion-equipo.component';
import { TipoDanoComponent } from './pages/tipo-dano/tipo-dano.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardVentasComponent } from './pages/dashboard-ventas/dashboard-ventas.component';
import { DashboardAvisosComponent } from './pages/dashboard-avisos/dashboard-avisos.component';
import { DashboardVideoComponent } from './pages/dashboard-video/dashboard-video.component';
import { DashboardCobranzaComponent } from './pages/dashboard-cobranza/dashboard-cobranza.component';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { EditarClasificacionEquipoComponent } from './pages/editar-clasificacion-equipo/editar-clasificacion-equipo.component';
import { EditarMaterialComponent } from './pages/editar-materiales/editar-materiales.component';
import { EditarProyectosComponent } from './pages/editar-proyectos/editar-proyectos.component';
import { EditarTipoDanoComponent } from './pages/editar-tipo-dano/editar-tipo-dano.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { ReportesEnvioComponent } from './pages/reportes-envio/reportes-envio.component';
import { ReportesDevolucionComponent } from './pages/reportes-devolucion/reportes-devolucion.component';
import { ReportesCapacitacionComponent } from './pages/reportes-capacitacion/reportes-capacitacion.component';
import { ReportesSeguimientoComponent } from './pages/reportes-seguimiento/reportes-seguimiento.component';
import { ReportesDanoComponent } from './pages/reportes-dano/reportes-dano.component';
import { UsersComponent } from './pages/users/users.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { NuevaNotificacionComponent } from './pages/nueva-notificacion/nueva-notificacion.component';
import { NuevoUserComponent } from './pages/nuevo-user/nuevo-user.component';


const routes: Routes = [
    { path: '', component: InicioComponent},
    // Rutas ingles
    {path: 'home', component: InicioComponent},
    {path: 'users', component: UsersComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'notificaciones', component: NotificacionesComponent},
    {path: 'speakers', component: SpeakersComponent},
    {path: 'nueva-notificacion', component: NuevaNotificacionComponent},
    {path: 'nuevo-user', component: NuevoUserComponent},








];
@NgModule({
    imports: [
        RouterModule.forRoot( routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
