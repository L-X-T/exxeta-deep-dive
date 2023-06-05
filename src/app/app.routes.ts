// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'customer/booking-history',
    loadComponent: () => import('./customer/booking-history/booking-history.component').then((c) => c.BookingHistoryComponent)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
