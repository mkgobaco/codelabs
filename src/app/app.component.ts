import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true"/>
    </header>
    <section class="content">
        <app-home></app-home>
      </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})


/*
// Will Error when uncommented.
@Component({
  standalone: true,
  selector: 'app-foobar',
  template: `<h1>Foo World!</h1>`,
  styleUrls: ['./app.component.css'],
})
  */

export class AppComponent {
  title = 'homes';
}
