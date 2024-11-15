import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { HomeComponent } from './components/home/home.component';
import {SedesMenuComponent} from "./components/sedes-menu/sedes-menu.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";

const routes: Routes = [
  { path: 'error', component: PaginaErrorComponent},

  /* Pagina de inicio */
  { path: 'home', component: HomeComponent },

  /* Pagina donde se listan las sedes */
  { path: 'sedes-menu', component: SedesMenuComponent },

  /* Pagina de contacto */
  { path: 'contact', component: ContactPageComponent },

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
