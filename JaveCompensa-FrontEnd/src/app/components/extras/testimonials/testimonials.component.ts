import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials = [
    {
      text: "JaveCompensa ha cambiado mi vida y la de mi familia. Gracias a sus servicios de salud y educación, hemos mejorado nuestra calidad de vida y accedido a oportunidades que antes parecían imposibles.",
      name: "César Bustacara",
      occupation: "Dueño de diversos ranchos.",
      backgroundImage: "assets/img/testimonials/CesarBustacara.jpg"
    },
    {
      text: "Gracias a JaveCompensa, pude obtener el subsidio de vivienda que necesitaba para adquirir mi casa. Son una entidad comprometida con el bienestar de las familias.",
      name: "Alberto Vigna",
      occupation: "Ingeniero (casi)",
      backgroundImage: "assets/img/testimonials/AlbertoVigna.jpg"
    },
    {
      text: "Los programas de recreación de JaveCompensa son excelentes. Mi familia y yo disfrutamos de actividades que mejoran nuestra salud y bienestar.",
      name: "Gabriel Negrín",
      occupation: "Experto Programador",
      image: "assets/img/user3.jpg",
      backgroundImage: "assets/img/testimonials/GabrielNegrin.png"
    },
    {
      text: "El apoyo educativo y deportivo que brinda JaveCompensa me ha permitido acceder a cursos y capacitaciones que han impulsado mi carrera profesional.",
      name: "Andrés Vaca",
      occupation: "Analista de Datos",
      backgroundImage: "assets/img/testimonials/AndresVaca.png"
    },
    {
      text: "La atención médica subsidiada de JaveCompensa ha sido un gran alivio para mi familia. Ahora podemos acceder a servicios de salud de calidad.",
      name: "Juan Diego",
      occupation: "Técnico en Sistemas",
      image: "assets/img/user5.jpg",
      backgroundImage: "assets/img/testimonials/JuanDiego.png"
    },
    {
      text: "Las clases en javecompensa me han ayudado a mejorar mis habilidades de deportes",
      name: "Daniel Mejia",
      occupation: "Tecnico en sistemas",
      image: "assets/img/user3.jpg",
      backgroundImage: "assets/img/testimonials/danielmejia.jpeg"
    }
    
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 10000); // Cambia cada 5 segundos
  }

  selectTestimonial(index: number) {
    this.currentIndex = index;
    clearInterval(this.interval);
    this.startAutoSlide();
  }
}
