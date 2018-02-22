import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-places-viewer></app-places-viewer>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
