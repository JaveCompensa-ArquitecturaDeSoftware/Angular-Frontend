import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { HomeComponent } from './components/home/home.component';
import {SedesMenuComponent} from "./components/menus/sedes-menu/sedes-menu.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {InstalacionesMenuComponent} from "./components/menus/instalaciones-menu/instalaciones-menu.component";
import {BookingFormComponent} from "./components/booking-form/booking-form.component";
import {EventsMenuComponent} from "./components/menus/events-menu/events-menu.component";

const routes: Routes = [
  { path: 'error', component: PaginaErrorComponent},

  /* Pagina de inicio */
  { path: 'home', component: HomeComponent },

  /* Pagina donde se listan las sedes */
  { path: 'sedes-menu', component: SedesMenuComponent },

  /* Pagina donde se listan las instalaciones de una sede */
  { path: 'instalaciones-menu', component: InstalacionesMenuComponent },

  /* Pagina para confirmar la reserva */
  { path: 'booking-form', component: BookingFormComponent },

  /* Pagina de contacto */
  { path: 'contact', component: ContactPageComponent },

  /* Pagina de proximos eventos */
  { path: 'events', component: EventsMenuComponent },

  /* Pagina default */
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(routes,
    {
      bindToComponentInputs: true,
      onSameUrlNavigation: 'reload'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
