/**
 * Returns a map and list of all places.
 * Allows places to be filtered.
 */

// Angular
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

// RxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';

// Interfaces
import { Poi } from '../../models/poi';
import { Term } from '../../models/term';

// Services
import { UrlService } from '../../shared/url.service';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-places-viewer',
  templateUrl: './places-viewer.component.html'
})
export class PlacesViewerComponent implements OnInit {
  terms: Term[];
  poi$: Observable<Poi[]>; // The $ is a convention that indicates poi$ is an Observable, not an array.
  google: any;

  // Needed for agm to center the map
  defaultMapLat = 50.8490377;
  defaultMapLng = 4.3562062;

  constructor(
    private urlService: UrlService,
    private dataService: DataService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTerms();
    this.watchRouter();
  }

  getTerms(): void {
    this.dataService.getTerms().subscribe(terms => (this.terms = terms));
  }

  watchRouter(): void {
    this.poi$ = this.route.paramMap
      .map(paramMap => paramMap.get('term')) /// map the route params to one element
      .switchMap(term => this.dataService.getPlaces('?category=', term)) // change the main stream (observable) to the Http async request
      .share(); // prevent the request being done multiple times
  }
}
