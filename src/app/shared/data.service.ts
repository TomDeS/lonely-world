/**
 * Responsible for API calls to json-server
 * @TODO: move to Firebase
 */

// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http/src/params';
import { error } from 'util';

// RxJS
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

// Interfaces
import { Poi } from '../models/poi';
import { Term } from '../models/term';
import { HttpRequest } from '@angular/common/http/src/request';

const API_PLACES = '/pois';
const API_TERMS = '/terms';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  /**
   * Get all terms from the server
   */
  getTerms(): Observable<Term[]> {
    return this.http.get<Term[]>(API_TERMS);
  }

  /**
   * Get places from the server
   * All if no query has been provided.
   * Specific if a query was provided.
   */
  getPlaces(param?: string, query?: string): Observable<Poi[]> {
    if (!query || query === 'all') {
      return this.http.get<Poi[]>(API_PLACES + '?_sort=top&_order=desc'); // no query? Or all items requested? Return all values
    } else {
      const queryURL = API_PLACES + param + query;
      return this.http.get<Poi[]>(queryURL); // Returns an array of requested items
    }
  }

  /**
   * Add a place
   */
  addPlace(poi: Poi): Observable<Poi> {
    return this.http.post<Poi>(API_PLACES, poi, httpOptions);
  }

  /**
   * POC that app isn't reloaded when using Firebase
   */
  storePlaces(poi: Poi): Observable<any> {
    return this.http.post(
      'https://lonely-world.firebaseio.com/pois.json',
      poi,
      httpOptions
    );
  }
}
