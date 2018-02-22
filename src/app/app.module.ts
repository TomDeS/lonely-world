// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Custom modules
import { AppRoutingModule } from './/app-routing.module';

// Components
import { HomeComponent } from './/home.component';
import { PlacesViewerComponent } from './containers/places-viewer/places-viewer.component';
import { PlacesDetailComponent } from './components/places-detail/places-detail.component';
import { PlacesFormComponent } from './components/places-form/places-form.component';
import { PlacesDashboardComponent } from './containers/places-dashboard/places-dashboard.component';
import { Error404Component } from './error404.component';

// Services
import { GoogleService } from './shared/google.service';
import { UrlService } from './shared/url.service';
import { DataService } from './shared/data.service';

// Angular Google Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlacesViewerComponent,
    PlacesDetailComponent,
    PlacesFormComponent,
    PlacesDashboardComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: '' // please note that this is my private key. Don't spread it into the wild!
    })
  ],
  providers: [GoogleService, UrlService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
