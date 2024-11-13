import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
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
