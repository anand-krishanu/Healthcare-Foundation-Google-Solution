import { Component } from '@angular/core';
import { AboutPageComponent } from "../about-page/about-page.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [AboutPageComponent]
})
export class HomePageComponent {

}
