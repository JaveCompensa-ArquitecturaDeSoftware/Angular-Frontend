import { Routes } from '@angular/router';
import { HomeComponent } from './components/frontend-pages/home/home.component';
import {LoginComponent} from './components/frontend-pages/login-components/login/login.component';
import { RegisterComponent } from './components/frontend-pages/login-components/register/register.component';
import {AdminDashboardComponent} from './components/frontend-pages/admin-dashboard/admin-dashboard.component';

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
