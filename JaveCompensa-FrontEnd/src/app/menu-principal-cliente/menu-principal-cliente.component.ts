import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
interface Card {
  name: string;
  description: string;
  unitValue: string;
}

@Component({
  selector: 'app-menu-principal-cliente',
  templateUrl: './menu-principal-cliente.component.html',
  styleUrls: ['./menu-principal-cliente.component.css']
})
export class MenuPrincipalClienteComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {}
}
