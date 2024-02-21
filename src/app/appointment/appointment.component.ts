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
    event.preventDefault();
    console.log("Appointment added");
  }
}
