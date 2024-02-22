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
    this.initMap();
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

    service.nearbySearch(request, function (results: string | any[], status: any) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    });

    const createMarker = (place: { geometry: { location: any; }; name: string; vicinity: string; }) => {
      const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      const infowindow = new google.maps.InfoWindow();

      google.maps.event.addListener(marker, 'click',  () => {
        infowindow.setContent('<strong>' + place.name + '</strong><br>' + place.vicinity);
        infowindow.open(map, this);
      });
    }
  }

  addAppointment(event: Event) {
    event.preventDefault();
    console.log("Appointment added");
  }
}
