/**
 * Returns the details of a place
 * @TODO: implement edit and remove functionallity
 */

// Angular
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { Poi } from '../../models/poi';

// Services
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.component.html',
  styles: []
})
export class PlacesDetailComponent implements OnInit {
  pois: Poi[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getPoi();
  }

  getPoi(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.dataService.getPlaces('?slug=', slug).subscribe(pois => {
      this.pois = pois;
    });
  }

  handleEdit(event) {}
  handleRemove(event) {}
}
