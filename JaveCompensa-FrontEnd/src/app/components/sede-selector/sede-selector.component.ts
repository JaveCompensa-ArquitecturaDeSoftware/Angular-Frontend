import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sede-selector',
  templateUrl: './sede-selector.component.html',
  styleUrls: ['./sede-selector.component.css']
})
export class SedeSelectorComponent {
  @Input() sedes = [
    {
      title: 'Sede Principal',
      name: 'JaveCompensa Centro',
      address: 'Calle 123 #45-67',
      city: 'Bogotá',
      image: 'assets/img/sedes/Sede01.jpg'
    },
    {
      title: 'Sede Norte',
      name: 'JaveCompensa Norte',
      address: 'Carrera 45 #120-33',
      city: 'Bogotá',
      image: 'assets/img/sedes/Sede02.jpg'
    },
    {
      title: 'Sede Medellín',
      name: 'JaveCompensa Medellín',
      address: 'Avenida El Poblado #60-30',
      city: 'Medellín',
      image: 'assets/img/sedes/Sede03.jpg'
    },
    {
      title: 'Sede Cali',
      name: 'JaveCompensa Cali',
      address: 'Calle 5 #38-20',
      city: 'Cali',
      image: 'assets/img/sedes/Sede04.jpg'
    },
    {
      title: 'Sede Bucaramanga',
      name: 'JaveCompensa Bucaramanga',
      address: 'Carrera 27 #45-67',
      city: 'Bucaramanga',
      image: 'assets/img/sedes/Sede05.jpg'
    },
    {
      title: 'Sede Barranquilla',
      name: 'JaveCompensa Barranquilla',
      address: 'Carrera 54 #74-22',
      city: 'Barranquilla',
      image: 'assets/img/sedes/Sede06.jpg'
    },
    {
      title: 'Sede Cartagena',
      name: 'JaveCompensa Cartagena',
      address: 'Avenida Santander #12-34',
      city: 'Cartagena',
      image: 'assets/img/sedes/Sede07.jpg'
    },
    {
      title: 'Sede Santa Marta',
      name: 'JaveCompensa Santa Marta',
      address: 'Carrera 1 #15-20',
      city: 'Santa Marta',
      image: 'assets/img/sedes/Sede08.jpg'
    },
    {
      title: 'Sede Villavicencio',
      name: 'JaveCompensa Villavicencio',
      address: 'Calle 20 #33-15',
      city: 'Villavicencio',
      image: 'assets/img/sedes/Sede09.jpg'
    },
    {
      title: 'Sede Pereira',
      name: 'JaveCompensa Pereira',
      address: 'Calle 14 #7-45',
      city: 'Pereira',
      image: 'assets/img/sedes/Sede10.jpg'
    }
  ];

  visibleStartIndex = 0;
  itemsPerPage = 3;

  // Muestra las sedes visibles en el carrusel
  get visibleSedes() {
    return this.sedes.slice(this.visibleStartIndex, this.visibleStartIndex + this.itemsPerPage);
  }

  // Avanza 3 sedes
  next() {
    if (this.visibleStartIndex + this.itemsPerPage < this.sedes.length) {
      this.visibleStartIndex += this.itemsPerPage;
    }
  }

  // Retrocede 3 sedes
  previous() {
    if (this.visibleStartIndex - this.itemsPerPage >= 0) {
      this.visibleStartIndex -= this.itemsPerPage;
    }
  }

  // Función para manejar el botón de reserva
  onReserve(sedeName: string) {
    alert(`Presionada la sede ${sedeName}`);

    /* TODO: Implementar la lógica para seleccionar una sede del MicroServicio */
  }
}
