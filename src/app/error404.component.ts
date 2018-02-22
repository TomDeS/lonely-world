import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
  <article>
  <div class="grid-container">
    <header class="grid-x grid-padding-x">
      <h1 class="large-12 cell page__title">404</h1>
    </header>
  </div>
  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="large-8 cell">
        <p>
          What did you do? You broke the internet!
        </p>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UTBsm0LzSP0?rel=0&amp;controls=0" frameborder="0"
          gesture="media" allow="encrypted-media" allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
  <footer>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="large-8 cell">
          <p> This project is licensed under
            <a href="http://www.wtfpl.net/txt/copying/" target="_blank">WTPL</a>, althoug please note that the software is provided as is,
            and no warranties ae given.</p>
        </div>
      </div>
    </div>
  </footer>
</article>
 `,
  styles: []
})
export class Error404Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
