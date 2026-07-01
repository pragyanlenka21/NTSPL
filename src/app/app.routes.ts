import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Home2Component } from './home2/home2.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'home',
        component: Home2Component
    }
];
