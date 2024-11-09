import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLinkActive
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
