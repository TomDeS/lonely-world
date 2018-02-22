/**
 * Form for CUD
 */

// Angular
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Interfaces
import { Poi } from '../../models/poi';
import { Term } from '../../models/term';
import { Address } from '../../models/address';

// Service
import { DataService } from '../../shared/data.service';
import { GoogleService } from '../../shared/google.service';
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../../shared/url.service';

@Component({
  selector: 'app-places-form',
  templateUrl: './places-form.component.html'
})
export class PlacesFormComponent implements OnInit {
  terms: Term[];
  placesForm: FormGroup;

  @Input() detail: Poi; // this is for in edditing mode @TODO: enable edditing.
  @Output() add: EventEmitter<Poi> = new EventEmitter<Poi>();

  constructor(
    private dataService: DataService,
    private googleService: GoogleService,
    private urlService: UrlService
  ) {}

  ngOnInit(): void {
    this.getTerms();
    this.placesForm = new FormGroup({
      name: new FormControl(),
      category: new FormControl(),
      address: new FormControl(),
      description: new FormControl(),
      top: new FormControl()
    });
  }

  getTerms(): void {
    this.dataService.getTerms().subscribe(
      terms => (this.terms = terms.slice(1, terms.length).sort()) // we don't want the option 'all'
    );
  }

  handleSubmit() {
    this.add.emit(this.placesForm.value);
  }
}
