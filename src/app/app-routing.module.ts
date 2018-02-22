/**
 * Routing
 * File location and name as per conventions.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { Error404Component } from './error404.component';
import { PlacesViewerComponent } from './containers/places-viewer/places-viewer.component';
import { PlacesDashboardComponent } from './containers/places-dashboard/places-dashboard.component';
import { PlacesDetailComponent } from './components/places-detail/places-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'dashboard', component: PlacesDashboardComponent },
  { path: 'detail/:slug', component: PlacesDetailComponent },
  { path: 'filter/:term', component: PlacesViewerComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
