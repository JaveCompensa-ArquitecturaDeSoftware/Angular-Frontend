import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../../authentication/keycloak/keycloak.service';
import { UserProfile } from '../../../authentication/keycloak/user-profile';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userProfile: UserProfile | undefined;

  searchEvents = '';
  searchInstallations = '';
  searchUsers = '';

  events = [{ name: 'Concierto de Rock' }, { name: 'Feria Gastronómica' }];
  installations = [{ name: 'Piscina Olímpica' }, { name: 'Cancha de Tenis' }];
  users = [{ name: 'Juan Pérez' }, { name: 'María López' }];

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.userProfile = this.keycloakService.profile;
  }

  viewReports() {
    alert('Botón de ver reportes');
  }

  filteredEvents() {
    return this.events.filter(event =>
      event.name.toLowerCase().includes(this.searchEvents.toLowerCase())
    );
  }

  filteredInstallations() {
    return this.installations.filter(installation =>
      installation.name.toLowerCase().includes(this.searchInstallations.toLowerCase())
    );
  }

  filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchUsers.toLowerCase())
    );
  }

  viewEvent(event: any) {
    alert(`Ver detalles del evento: ${event.name}`);
  }

  editEvent(event: any) {
    alert(`Editar evento: ${event.name}`);
  }

  deleteEvent(event: any) {
    alert(`Eliminar evento: ${event.name}`);
  }

  createEvent() {
    alert('Crear nuevo evento');
  }

  viewInstallation(installation: any) {
    alert(`Ver detalles de la instalación: ${installation.name}`);
  }

  editInstallation(installation: any) {
    alert(`Editar instalación: ${installation.name}`);
  }

  deleteInstallation(installation: any) {
    alert(`Eliminar instalación: ${installation.name}`);
  }

  createInstallation() {
    alert('Crear nueva instalación');
  }

  viewUser(user: any) {
    alert(`Ver detalles del usuario: ${user.name}`);
  }

  editUser(user: any) {
    alert(`Editar usuario: ${user.name}`);
  }

  deleteUser(user: any) {
    alert(`Eliminar usuario: ${user.name}`);
  }

  createUser() {
    alert('Registrar nuevo usuario');
  }
}
