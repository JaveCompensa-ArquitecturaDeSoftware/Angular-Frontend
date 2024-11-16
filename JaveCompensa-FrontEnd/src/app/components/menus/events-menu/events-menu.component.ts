import { Component } from '@angular/core';

@Component({
  selector: 'app-events-menu',
  templateUrl: './events-menu.component.html',
  styleUrls: ['./events-menu.component.css']
})
export class EventsMenuComponent {
  eventos = [
    {
      name: 'Concierto de Rock',
      type: 'Concierto',
      date: '2024-12-15',
      time: '19:00',
      price: 50000,
      description: 'Vive una noche inolvidable con las mejores bandas de rock.',
      sede: 'JaveCompensa Norte',
      image: 'assets/img/events/Concert.jpeg'
    },
    {
      name: 'Feria Gastronómica',
      type: 'Feria',
      date: '2024-12-20',
      time: '10:00',
      price: 30000,
      description: 'Disfruta de los sabores más deliciosos en nuestra feria anual.',
      sede: 'JaveCompensa Centro',
      image: 'assets/img/events/Feria.jpg'
    },
    {
      name: 'Torneo de Tenis',
      type: 'Deportivo',
      date: '2024-12-10',
      time: '08:00',
      price: 20000,
      description: 'Participa o asiste al torneo con los mejores jugadores de la región.',
      sede: 'JaveCompensa Medellín',
      image: 'assets/img/events/Sports.jpg'
    },
    {
      name: 'Clase de Yoga al Aire Libre',
      type: 'Clase',
      date: '2024-12-05',
      time: '07:00',
      price: 15000,
      description: 'Relájate y encuentra tu paz interior en una clase al aire libre.',
      sede: 'JaveCompensa Cali',
      image: 'assets/img/events/Class.png'
    },
    {
      name: 'Festival de Comedia',
      type: 'Comedia',
      date: '2024-12-18',
      time: '20:00',
      price: 40000,
      description: 'Una noche para reír con los mejores comediantes del país.',
      sede: 'JaveCompensa Bucaramanga',
      image: 'assets/img/events/Comedy.jpg'
    }
  ];

  // Filtros seleccionados
  selectedSede: string = '';
  selectedType: string = '';

  // Lista de eventos filtrados
  filteredEvents = this.eventos;

  // Valores únicos para los filtros
  get uniqueSedes() {
    return [...new Set(this.eventos.map(evento => evento.sede))];
  }

  get uniqueTypes() {
    return [...new Set(this.eventos.map(evento => evento.type))];
  }

  // Aplicar filtros
  applyFilters() {
    this.filteredEvents = this.eventos.filter(evento => {
      const matchesSede = this.selectedSede ? evento.sede === this.selectedSede : true;
      const matchesType = this.selectedType ? evento.type === this.selectedType : true;
      return matchesSede && matchesType;
    });
  }
}
