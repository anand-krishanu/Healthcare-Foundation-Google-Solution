import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

  constructor ( private router: Router) {}
  

  OnPayment() {
    this.router.navigate(['/nf4873iufbi3tt']);
  }
}
