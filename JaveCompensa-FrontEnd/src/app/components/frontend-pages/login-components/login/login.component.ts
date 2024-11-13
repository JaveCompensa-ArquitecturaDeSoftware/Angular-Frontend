import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {GatewayService} from '../../../../services/gateway-service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    RouterLink
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  tipoDocumento: string = '';
  cedula: string = '';
  password: string = '';

  constructor(private router: Router, private gatewayService: GatewayService) {}

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

    const loginFormData = {
      tipoDocumento: this.tipoDocumento,
      cedula: this.cedula,
      password: this.password
    }

    console.log("Datos a enviar", loginFormData)

    this.gatewayService.sendLoginData(loginFormData).subscribe(
      response => {
        console.log('Login exitoso:', response);
        // this.router.navigate(['/login']); TODO: Redirigir a la página de inicio según su rol.
      },
      error => {
        console.error('Error en el login:', error);
        alert("Error en el login, por favor intenta de nuevo.");
      }
    );
  }
}
