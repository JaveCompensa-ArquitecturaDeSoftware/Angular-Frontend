import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instalaciones-menu',
  templateUrl: './instalaciones-menu.component.html',
  styleUrls: ['./instalaciones-menu.component.css']
})
export class InstalacionesMenuComponent implements OnInit {
  sedeName: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sedeName = params['sede'];
    });
  }

  // Lista de instalaciones
  instalaciones = [
    {
      name: 'Piscina Olímpica',
      capacity: '50 personas',
      description: 'Una piscina de tamaño olímpico perfecta para competiciones y recreación.',
      image: 'assets/img/piscina.jpg'
    },
    {
      name: 'Canchas de Tenis',
      capacity: '4 canchas',
      description: 'Canchas de tenis profesionales con iluminación nocturna.',
      image: 'assets/img/tenis.jpg'
    },
    {
      name: 'Canchas de Tejo',
      capacity: '20 personas',
      description: 'Espacio tradicional para disfrutar del deporte nacional.',
      image: 'assets/img/tejo.jpg'
    },
    {
      name: 'Spa y Zona de Relax',
      capacity: '15 personas',
      description: 'Un espacio para relajarte con servicios de masajes y sauna.',
      image: 'assets/img/spa.jpg'
    }
  ];

  // Instalación seleccionada
  selectedInstalacion: any = null;

  // Seleccionar una instalación
  selectInstalacion(instalacion: any) {
    this.selectedInstalacion = instalacion;
  }

  // Redirigir al formulario de reserva
  goToBookingForm() {
    if (this.selectedInstalacion) {
      this.router.navigate(['/booking-form'], {
        queryParams: {
          sede: this.sedeName,
          instalacion: this.selectedInstalacion.name,
        },
      });
    } else {
      alert('Por favor, selecciona una instalación primero.');
    }
  }
}
