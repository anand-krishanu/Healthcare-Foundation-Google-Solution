import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  services = [
    {
      iconClass: 'fa fa-2x fa-user-md text-white',
      title: 'Emergency Care',
      description: 'Our dedicated team provides rapid and expert medical assistance, ensuring immediate care and relief for critical health emergencies, 24/7.'
    },
    {
      iconClass: 'fa fa-2x fa-stethoscope text-white',
      title: 'Outdoor Checkup',
      description: 'Experience thorough health evaluations in the fresh air of our outdoor facilities, where our healthcare professionals offer comprehensive assessments tailored to your well-being needs.'
    },
    {
      iconClass: 'fa fa-2x fa-procedures text-white',
      title: 'Operation & Surgery',
      description: 'With cutting-edge technology and skilled surgeons, we deliver precise surgical interventions, ensuring the best possible outcomes and compassionate care throughout your procedure.'
    },
    {
      iconClass: 'fa fa-2x fa-ambulance text-white',
      title: 'Ambulance Service',
      description: 'Our fleet of ambulances, staffed with trained paramedics, swiftly responds to emergencies, providing safe and efficient transportation to medical facilities for prompt treatment and care.'
    },
    {
      iconClass: 'fa fa-2x fa-pills text-white',
      title: 'Medicene and Pharmacy',
      description: 'Access a diverse range of medications and pharmaceutical products from our fully stocked pharmacy, where our knowledgeable staff provides personalized guidance and support for your healthcare needs.'
    },
    {
      iconClass: 'fa fa-2x fa-microscope text-white',
      title: 'Blood Tests',
      description: 'Utilizing advanced laboratory techniques, we conduct thorough blood analyses, offering valuable insights into your health status and facilitating early detection and management of various medical conditions.'
    },
  ];

  constructor() { }
}
