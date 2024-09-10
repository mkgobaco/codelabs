import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Hello Universe!</h1>`,
  styleUrls: ['./app.component.css'],
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
