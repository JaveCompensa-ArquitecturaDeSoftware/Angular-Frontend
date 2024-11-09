import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'loginRegister',
    component: LoginRegisterComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'  // Redirección a 'home' por defecto
  },
  {
    path: '**',
    redirectTo: '/home'  // Ruta de fallback para rutas no encontradas
  }
];
