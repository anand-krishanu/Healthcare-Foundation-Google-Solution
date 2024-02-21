import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../medical-service/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './medical-services.component.html',
  styleUrl: './medical-services.component.css'
})
export class MedicalServicesComponent implements OnInit {

  services: any[] = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.services = this.servicesService.services;
  }
}
