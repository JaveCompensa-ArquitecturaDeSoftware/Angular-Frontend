import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{
  formData = {
    people: null,
    time: '',
    date: '',
    duration: null
  };

  sedeName: string | null = null;
  instalacionName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sedeName = params['sede'];
      this.instalacionName = params['instalacion'];
    });
  }

  submitForm() {
    console.log('Datos de la reserva:', this.formData);
    alert('Reserva confirmada con éxito');
  }
}

