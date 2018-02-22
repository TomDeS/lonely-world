/**
 * 'Back end' of our app.
 * Allows for creation of places.
 */

// Angular
import { Component, OnInit } from '@angular/core';

// Interfaces
import { Poi } from '../../models/poi';
import { Term } from '../../models/term';

// Services
import { UrlService } from '../../shared/url.service';
import { DataService } from '../../shared/data.service';
import { GoogleService } from '../../shared/google.service';

@Component({
  selector: 'app-places-dashboard',
  templateUrl: './places-dashboard.component.html'
})
export class PlacesDashboardComponent implements OnInit {
  terms: Term[];

  constructor(
    private dataService: DataService,
    private urlService: UrlService,
    private googleService: GoogleService
  ) {}

  ngOnInit() {
    this.getTerms();
  }

  getTerms(): void {
    this.dataService.getTerms().subscribe(terms => (this.terms = terms));
  }

  handleCreation(event: Poi): void {
    // clean up slug and top
    event.slug = this.urlService.slugify(event.name);
    event.id = event.slug;
    console.log(event);

    // get coordinates and add new POI using json-server
    this.googleService.geocodeAddress(event.address).subscribe(geocoded => {
      event.lat = geocoded.results[0].geometry.location.lat;
      event.long = geocoded.results[0].geometry.location.lng;
      this.dataService
        .addPlace(event)
        .subscribe(res => console.log('added: ', res));
    });

    // get coordinates and add new POI using Firebase
    // this.googleService.geocodeAddress(event.address).subscribe(geocoded => {
    //   event.lat = geocoded.results[0].geometry.location.lat;
    //   event.long = geocoded.results[0].geometry.location.lng;
    //   this.dataService
    //     .storePlaces(event)
    //     .subscribe(res => console.log('added: ', res));
    // });
  }
}
