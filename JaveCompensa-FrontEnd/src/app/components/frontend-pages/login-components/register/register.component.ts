import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { GatewayService } from '../../../../services/gateway-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [FormsModule, RouterLink],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  tipoDocumento: string = '';
  cedula: string = '';
  nombres: string = '';
  apellidos: string = '';
  email: string = '';
  phone: string = '';
  nitEmpresa: string = '';
  ingresos: number | null = null;
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private gatewayService: GatewayService) {}

  onSubmit() {
    if (!this.tipoDocumento) {
      alert('Por favor, selecciona un tipo de documento.');
      return;
    }

    if (!this.cedula || !/^\d+$/.test(this.cedula)) {
      alert('El número de documento debe ser un número válido.');
      return;
    }

    if (!this.nombres || this.nombres.trim().length < 3) {
      alert('Los nombres deben tener al menos 3 caracteres.');
      return;
    }

    if (!this.apellidos || this.apellidos.trim().length < 3) {
      alert('Los apellidos deben tener al menos 3 caracteres.');
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

    if (!this.nitEmpresa || this.nitEmpresa.trim().length < 9) {
      alert('El NIT de la empresa debe tener al menos 9 caracteres.');
      return;
    }

    if (this.ingresos === null || this.ingresos <= 0) {
      alert('Por favor, ingresa un valor válido para los ingresos mensuales.');
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

    const registerFormData = {
      tipoDocumento: this.tipoDocumento,
      cedula: this.cedula,
      nombres: this.nombres,
      apellidos: this.apellidos,
      email: this.email,
      phone: this.phone,
      nitEmpresa: this.nitEmpresa,
      ingresos: this.ingresos,
      password: this.password
    };

    console.log("Datos a enviar", registerFormData)

    this.gatewayService.sendRegisterData(registerFormData).subscribe(
      response => {
        console.log('Registro exitoso:', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error en el registro:', error);
        alert("Error en el registro, por favor intenta de nuevo.");
      }
    );
  }
}
