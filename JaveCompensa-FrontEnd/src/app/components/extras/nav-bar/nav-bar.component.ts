import { Component } from '@angular/core';
import { KeycloakService } from '../../../authentication/keycloak/keycloak.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from '../../../authentication/keycloak/user-profile';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
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
    console.log("Buscando si está logeado...");
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
      console.log("No estás logeado, redireccionando a login");
      this.router.navigate(['/login']).then(() => {
        this.keycloakService.init();
      });
    }
  }

  goToProfile() {
    console.log('Accediendo a Tu Perfil - Rol: ' + this.userProfile?.attributes?.rol);


    if (this.userProfile?.attributes?.rol == 'Administrador')
    {
      console.log('Redireccionando a Dashboard de Administrador');

      this.router.navigate(['/admin-dashboard']);
    }
    else if (this.userProfile?.attributes?.rol == 'Titular')
    {
      console.log('Dashboard de Usuario');
    }
    else if (this.userProfile?.attributes?.rol == 'Beneficiario')
    {
      alert('Dashboard beneficiario? O dashboard del titular? --> Como sería la lógica?') // TODO: ???
    }
    else
    {
      console.log("No estás logeado, redireccionando a login");

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
