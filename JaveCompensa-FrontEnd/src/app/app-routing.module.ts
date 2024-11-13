import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalClienteComponent } from './menu-principal-cliente/menu-principal-cliente.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'menu-principal', component: MenuPrincipalClienteComponent },
  { path: 'error', component: PaginaErrorComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
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
