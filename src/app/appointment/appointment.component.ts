import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  addAppointment(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Appointment added"); // Log a message to the console
  }
}
