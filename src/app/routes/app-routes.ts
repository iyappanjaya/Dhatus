import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../registration/registration.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'About',
        component: AboutComponent
    },
    {
        path: 'Contact',
        component: ContactComponent
    },
    {
        path: 'Login',
        component: RegistrationComponent
    }
];
