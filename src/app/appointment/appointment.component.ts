import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadMapScript();
  }

  loadMapScript() {
    const apiKey = 'AIzaSyA1B2C3D4E5F6G7H8I9J0';
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    script.onload = () => {
      this.initMap();
    };
    document.head.appendChild(script);
  }
  initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.7128, lng: -74.0060 },
      zoom: 13
    });

    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.getCenter(),
      radius: '5000',
      type: ['hospital']
    };

    service.nearbySearch(request, (results: any[], status: any) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          this.createMarker(results[i], map);
        }
      }
    });
  }

  createMarker(place: any, map: any) {
    const marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    const infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.setContent('<strong>' + place.name + '</strong><br>' + place.vicinity);
      infowindow.open(map, marker);
    });
  }

  addAppointment(event: Event) {
    event.preventDefault();
    console.log("Appointment added");
  }
}