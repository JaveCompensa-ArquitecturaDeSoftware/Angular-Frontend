import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  slides = [
    { image: 'assets/img/hero/HombreFeliz.jpg', alt: 'Foto 1', title: 'Título 1', buttonText: 'Ver Más', link: '/section1' },
    { image: 'assets/img/hero/Tejo.jpg', alt: 'Foto 2', title: 'Título 2', buttonText: 'Ver Más', link: '/section2' },
    { image: 'assets/img/hero/Piscina.jpeg', alt: 'Foto 3', title: 'Título 3', buttonText: 'Ver Más', link: '/section3' },
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
      this.nextSlide();
    }, 5000); // Cambia cada 5 segundos
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
