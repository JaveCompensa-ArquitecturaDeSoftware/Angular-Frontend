import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  onSubmit() {
    console.log('Formulario enviado');
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
  }
}
