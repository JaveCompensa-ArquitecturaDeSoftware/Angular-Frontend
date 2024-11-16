import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { ErrorService } from '../../services/backEndServices/error.service';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined;
  private _profile: UserProfile | undefined;
  private authenticated: boolean = false;

  constructor(private router: Router, private errorService: ErrorService) {}

  get keycloak() { // Singleton pattern
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: environment.keycloackServiceUrl,
        realm: environment.realm,
        clientId: environment.clientId,
      });
    }
    return this._keycloak;
  }

  get profile(): UserProfile | undefined {
    return this._profile;
  }

  accountManagement() {
    this.keycloak?.accountManagement();
  }

  async init() {
    console.log('Authenticating...');
    console.log('URL completa:', window.location.href);
    if (window.location.href === 'http://localhost:4200/') {
      console.log('Ruta actual:', this.router.url);
      return;
    }
    try {
      this.authenticated = await this.keycloak
        .init({
          onLoad: 'login-required', // Si no está autenticado, redirige a la página de login
        });

      if (!this.authenticated) {
        await this.keycloak.login();
        return;
      }

      // Cargar el perfil de usuario desde Keycloak
      const profile = (await this.keycloak.loadUserProfile()) as UserProfile;

      // Agregar el token al perfil
      profile.token = this.keycloak.token;

      // Verificar si hay atributos adicionales en el token de Keycloak
      const keycloakTokenParsed = this.keycloak.tokenParsed as any;

      if (keycloakTokenParsed?.attributes) {
        profile.attributes = {
          picture: keycloakTokenParsed.attributes.picture?.[0],
          dob: keycloakTokenParsed.attributes.dob?.[0],
          webUrl: keycloakTokenParsed.attributes.webURL?.[0],
          description: keycloakTokenParsed.attributes.description?.[0],
          userType: keycloakTokenParsed.attributes.userType?.[0],
          socialMedia: keycloakTokenParsed.attributes.socialNetworks ?? [],
        };
      }

      this._profile = profile;


      //Aqui puedes configurar a donde quieres que vaya según el tipo de usuario
      if (this._profile) {
        console.log('Authenticated User:', this._profile);
        const userType = this._profile.attributes?.rol ? this._profile.attributes.rol[0] : undefined;
        console.log("Perfil: " + userType);
        console.log('%c' + "Perfil del usuario:"  + userType, 'background-color: #494; color: white;');

        if (userType == 'Administrador') {
          this.router.navigate(['']);
        } else if (userType == 'Titular') {
          this.router.navigate(['']);
        } else if (userType == 'Beneficiario') {
          this.router.navigate(['']);
        } else if (userType == 'NoAfiliado') {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['']);
        }
      }
    } catch (error) {
      console.error('Error during Keycloak initialization', error);

      // Manejar errores específicos
      if (error instanceof Error && error.message.includes('Timeout')) {
        this.handleKeycloakError(error);
      }

      this.router.navigate(['error']);
    }
  }

  handleKeycloakError(error: any) {
    console.log('Handling Keycloak Error:', error);
    const errorMessage = error?.message || 'Error desconocido';
    this.errorService.setErrorMessage(errorMessage);
    this.router.navigate(['error']);
  }

  login() {
    return this.keycloak?.login();
  }

  logout() {
    return this.keycloak?.logout({
      redirectUri: 'http://localhost:4200',
    });
  }
}
