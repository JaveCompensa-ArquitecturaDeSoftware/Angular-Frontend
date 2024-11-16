import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface Service {
  id: number;
  name: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  services: Service[] = [
    { id: 1, name: 'Tennis' },
    { id: 2, name: 'Cancha de Fútbol' },
    { id: 3, name: 'Piscina' },
    { id: 4, name: 'Cancha de Tejo' },
    { id: 5, name: 'Cancha de Squash' },
    { id: 6, name: 'Cancha de Baloncesto' },
    { id: 7, name: 'Cancha de Voleibol' },
    { id: 8, name: 'Cancha de Tenis de Mesa' },
    { id: 9, name: 'Cancha de Fútbol 5' },
    { id: 10, name: 'Cancha de Fútbol 7' },
    { id: 11, name: 'Cancha de Fútbol 11' },
    { id: 12, name: 'Cancha de Balonmano' },
    { id: 13, name: 'Cancha de Fútbol Sala' },
    { id: 14, name: 'Cancha de Baloncesto 3x3' },
    { id: 15, name: 'Salón de Juegos' },
    { id: 16, name: 'Gimnasio' },
    { id: 17, name: 'Pista de Atletismo' },
    { id: 18, name: 'Pista de Patinaje' },
    { id: 19, name: 'Pista de Skateboarding' },
    { id: 20, name: 'Pista de BMX' },
    { id: 21, name: 'Pista de Ciclismo' },
    { id: 22, name: 'Pista de Karting' },
    { id: 23, name: 'Pista de Carreras' },
    { id: 24, name: 'Pista de Patinaje de Velocidad' },
    { id: 25, name: 'Pista de Patinaje Artístico' },
    { id: 26, name: 'Pista de Patinaje de Hockey' },
    { id: 27, name: 'Pista de Patinaje sobre Hielo' },
  ];

  // Métodos de ejemplo para los botones
  addService() {
    alert('Función para agregar servicio.');
  }

  editService(service: Service) {
    alert(`Función para editar el servicio: ${service.name}`);
  }

  deleteService(service: Service) {
    alert(`Función para eliminar el servicio: ${service.name}`);
  }
}
