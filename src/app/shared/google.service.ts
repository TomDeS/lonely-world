/**
 * Calls to Google API
 */

// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs/Observable';

// Interfaces
import { Address } from '../models/address';

const GEOCODE_KEY = 'AIzaSyBnOxUAIPTUApp-gex9P9WAo5rYI9tE3Pg'; // please not that this is my private key. Don't spread it into the wild!
const CITY = '+1000+Brussel';

@Injectable()
export class GoogleService {
  constructor(private http: HttpClient) {}

  geocodeAddress(address: string): Observable<Address> {
    // Replace spaces from address by + signs
    address = address.replace(/\s/g, '+');

    // Build query
    const query = `https://maps.googleapis.com/maps/api/geocode/json?address=${address},${CITY}&key=${GEOCODE_KEY}&language=en`;

    return this.http.get<Address>(query);
  }
}
