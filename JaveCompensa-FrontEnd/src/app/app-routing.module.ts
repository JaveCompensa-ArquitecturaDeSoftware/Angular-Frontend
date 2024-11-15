import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { HomeComponent } from './components/home/home.component';
import {SedesMenuComponent} from "./components/sedes-menu/sedes-menu.component";

const routes: Routes = [
  { path: 'error', component: PaginaErrorComponent},
  { path: 'home', component: HomeComponent },
  { path: 'sedes-menu', component: SedesMenuComponent },
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
