import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  tipoDocumento: string = '';
  cedula: string = '';
  nombre: string = '';
  email: string = '';
  phone: string = '';
  fechaNacimiento: string = '';
  genero: string = '';
  address: string = '';
  neighborhood: string = '';
  city: string = '';
  stratum: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    // Validaciones
    if (!this.tipoDocumento) {
      alert('Por favor, selecciona un tipo de documento.');
      return;
    }

    if (!this.cedula || !/^\d+$/.test(this.cedula)) {
      alert('El número de documento debe ser un número válido.');
      return;
    }

    if (!this.nombre || this.nombre.trim().length < 3) {
      alert('El nombre completo debe tener al menos 3 caracteres.');
      return;
    }

    if (!this.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (!this.phone || !/^\d+$/.test(this.phone)) {
      alert('El número de teléfono debe ser un número válido.');
      return;
    }

    if (!this.fechaNacimiento) {
      alert('Por favor, selecciona una fecha de nacimiento.');
      return;
    }

    if (!this.genero) {
      alert('Por favor, selecciona un género.');
      return;
    }

    if (!this.address || this.address.trim().length < 5) {
      alert('La dirección debe tener al menos 5 caracteres.');
      return;
    }

    if (!this.neighborhood || this.neighborhood.trim().length < 3) {
      alert('El barrio debe tener al menos 3 caracteres.');
      return;
    }

    if (!this.city || this.city.trim().length < 3) {
      alert('La ciudad debe tener al menos 3 caracteres.');
      return;
    }

    if (!this.stratum || !['1', '2', '3', '4', '5', '6'].includes(this.stratum)) {
      alert('Por favor, selecciona un estrato válido.');
      return;
    }

    if (!this.password || this.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Si todo es válido, imprime los datos en la consola
    console.log({
      tipoDocumento: this.tipoDocumento,
      cedula: this.cedula,
      nombre: this.nombre,
      email: this.email,
      phone: this.phone,
      fechaNacimiento: this.fechaNacimiento,
      genero: this.genero,
      address: this.address,
      neighborhood: this.neighborhood,
      city: this.city,
      stratum: this.stratum,
      password: this.password
    });
  }
}
