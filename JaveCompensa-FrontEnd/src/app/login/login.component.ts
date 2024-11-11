import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  tipoDocumento: string = '';
  cedula: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    // Validaciones
    if (!this.tipoDocumento) {
      alert('Por favor, selecciona un tipo de documento.');
      return;
    }

    if (!this.cedula || !/^\d+$/.test(this.cedula)) {
      alert('La cédula debe ser un número válido.');
      return;
    }

    if (!this.password) {
      alert('Por favor, ingresa una contraseña.');
      return;
    }

    if (this.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Si los datos son válidos, imprime los datos en la consola
    console.log({
      tipoDocumento: this.tipoDocumento,
      cedula: this.cedula,
      password: this.password
    });
  }
}
