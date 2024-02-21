import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { MedicalServicesComponent } from "./medical-services/medical-services.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomePageComponent, AboutPageComponent, MedicalServicesComponent, AppointmentComponent, FooterComponent]
})
export class AppComponent {
  title = 'Donation-Website';
}
