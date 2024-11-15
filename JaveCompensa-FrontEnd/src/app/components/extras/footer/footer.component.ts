import { Component } from '@angular/core';
import { servicioActividad } from '../../../services/backEndServices/servicioActividad';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(
    private servicioActividad: servicioActividad,
  ) {}

  prueba() {
    this.servicioActividad.getActividadById(1).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        alert("Error al eliminar item")
      }
    )
  }
}
