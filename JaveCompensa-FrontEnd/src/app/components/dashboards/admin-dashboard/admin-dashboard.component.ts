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

  events = [
    { name: 'Concierto de Rock', capacity: 200, occupation: 150 },
    { name: 'Feria Gastronómica', capacity: 300, occupation: 120 },
    { name: 'Clase de Yoga al Aire Libre', capacity: 50, occupation: 40 },
    { name: 'Concierto de Jazz', capacity: 150, occupation: 130 },
    { name: 'Competencia de Natación', capacity: 100, occupation: 80 },
    { name: 'Torneo de Ajedrez', capacity: 30, occupation: 25 },
    { name: 'Festival de Cine al Aire Libre', capacity: 200, occupation: 180 },
    { name: 'Taller de Manualidades', capacity: 20, occupation: 15 },
    { name: 'Clase de Zumba', capacity: 60, occupation: 50 },
    { name: 'Obra de Teatro Infantil', capacity: 100, occupation: 70 },
    { name: 'Mercado de Agricultores', capacity: 500, occupation: 300 },
    { name: 'Festival de Comida Internacional', capacity: 400, occupation: 250 },
    { name: 'Competencia de Baile', capacity: 100, occupation: 90 },
    { name: 'Charla Motivacional', capacity: 200, occupation: 170 },
    { name: 'Clase de Cocina', capacity: 30, occupation: 20 },
    { name: 'Sesión de Pilates', capacity: 50, occupation: 40 },
    { name: 'Exposición de Arte', capacity: 150, occupation: 120 },
    { name: 'Torneo de Fútbol', capacity: 200, occupation: 180 },
    { name: 'Feria de Tecnología', capacity: 300, occupation: 280 },
    { name: 'Maratón de Lectura', capacity: 100, occupation: 70 }
  ];


  installations = [
    { name: 'Piscina Olímpica', capacity: 50, occupation: 20 },
    { name: 'Cancha de Tenis', capacity: 10, occupation: 5 },
    { name: 'Gimnasio', capacity: 30, occupation: 15 },
    { name: 'Salón de Eventos', capacity: 200, occupation: 150 },
    { name: 'Auditorio Principal', capacity: 300, occupation: 250 },
    { name: 'Cancha de Baloncesto', capacity: 20, occupation: 10 },
    { name: 'Cancha de Fútbol', capacity: 100, occupation: 50 },
    { name: 'Zona de Picnic', capacity: 80, occupation: 40 },
    { name: 'Área de Juegos Infantiles', capacity: 30, occupation: 15 },
    { name: 'Jacuzzi', capacity: 10, occupation: 5 },
    { name: 'Sala de Reuniones', capacity: 20, occupation: 10 },
    { name: 'Parqueadero', capacity: 200, occupation: 120 },
    { name: 'Salón de Baile', capacity: 50, occupation: 25 },
    { name: 'Área de Barbacoa', capacity: 30, occupation: 20 },
    { name: 'Pista de Atletismo', capacity: 60, occupation: 40 },
    { name: 'Zona de Meditación', capacity: 15, occupation: 10 },
    { name: 'Cancha de Voleibol', capacity: 20, occupation: 12 },
    { name: 'Cafetería', capacity: 100, occupation: 70 },
    { name: 'Biblioteca', capacity: 80, occupation: 60 },
    { name: 'Sala de Juegos', capacity: 25, occupation: 18 }
  ];

  users = [
    { id: '001', name: 'Juan Pérez' },
    { id: '002', name: 'María López' },
    { id: '003', name: 'Carlos Ramírez' },
    { id: '004', name: 'Ana Gómez' },
    { id: '005', name: 'Luis Torres' },
    { id: '006', name: 'Sofía Martínez' },
    { id: '007', name: 'Ricardo Sánchez' },
    { id: '008', name: 'Laura Fernández' },
    { id: '009', name: 'Daniela Vargas' },
    { id: '010', name: 'Pedro Morales' },
    { id: '011', name: 'Andrés Castro' },
    { id: '012', name: 'Fernanda Ortega' },
    { id: '013', name: 'Gabriel Peña' },
    { id: '014', name: 'Claudia Rivera' },
    { id: '015', name: 'Héctor Serrano' },
    { id: '016', name: 'Natalia Rojas' },
    { id: '017', name: 'Diego Guzmán' },
    { id: '018', name: 'Camila Pardo' },
    { id: '019', name: 'Sebastián Acosta' },
    { id: '020', name: 'Manuela Restrepo' }
  ];

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
