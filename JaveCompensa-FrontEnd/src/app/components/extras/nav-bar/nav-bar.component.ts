import { Component } from '@angular/core';
import { KeycloakService } from '../../../authentication/keycloak/keycloak.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from '../../../authentication/keycloak/user-profile';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  userProfile: UserProfile | undefined;
  public loginButtonText = 'LogIn/Registrarse';
  public showDropdown = false;

  constructor(
    private keycloakService: KeycloakService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    console.log("Buscando si esta logeado...");
    this.userProfile = this.keycloakService.profile;
    if (this.userProfile != undefined) {
      if (this.userProfile.firstName) {
        this.loginButtonText = this.userProfile.firstName;
      }
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  checkLogin() {
    if (this.userProfile == undefined) {
        console.log("no estás logeado, redireccionando a login");
        this.router.navigate(['/login']).then(() => {
            this.keycloakService.init();
        });
    }
}


  logout() {
    if (!this.keycloakService.keycloak) {
      console.error('Keycloak instance is not available for logout');
      return;
    }
    return this.keycloakService.logout();
  }
  
}
