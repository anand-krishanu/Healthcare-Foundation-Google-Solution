import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MedicalServicesComponent } from './medical-services/medical-services.component';
import { DonateComponent } from './donate/donate.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ErrorComponent } from './error/error.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'services', component: MedicalServicesComponent },
    { path: 'nmfdi39984hfi', component: DonateComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'sign-in', component: SignInComponent },
    {path: 'nf4873iufbi3tt', component: ThankYouComponent},
    { path: '**', component: ErrorComponent }
];