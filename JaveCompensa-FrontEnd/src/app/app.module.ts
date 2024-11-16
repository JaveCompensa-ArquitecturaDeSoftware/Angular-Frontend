import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakService } from './authentication/keycloak/keycloak.service';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTokenInterceptor } from './authentication/interceptor/http-token.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/dashboards/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/extras/nav-bar/nav-bar.component';
import { HeroComponent } from './components/extras/hero/hero.component';
import { ServicesComponent } from './components/extras/services/services.component';
import { TestimonialsComponent } from './components/extras/testimonials/testimonials.component';
import { SedeSelectorComponent } from './components/sede-selector/sede-selector.component';
import { FooterComponent } from './components/extras/footer/footer.component';
import { SedesMenuComponent } from './components/menus/sedes-menu/sedes-menu.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { InstalacionesMenuComponent } from './components/menus/instalaciones-menu/instalaciones-menu.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { EventsMenuComponent } from './components/menus/events-menu/events-menu.component';
import { BookingPaymentComponent } from './components/booking-payment/booking-payment.component';

export function kcFactory(kcService: KeycloakService){
  return () => kcService.init();
}
@NgModule({
  declarations: [
    AdminDashboardComponent,
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HeroComponent,
    ServicesComponent,
    TestimonialsComponent,
    SedeSelectorComponent,
    FooterComponent,
    SedesMenuComponent,
    ContactPageComponent,
    InstalacionesMenuComponent,
    BookingFormComponent,
    EventsMenuComponent,
    BookingPaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
    ,
    {
    provide: APP_INITIALIZER,
    deps: [KeycloakService],
    useFactory: kcFactory,
    multi: true
  }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
