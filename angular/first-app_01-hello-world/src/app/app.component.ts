import {Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from "./housing-location/housing-location.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HousingLocationComponent],
  template: `
    <main>
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
        <section class="content">
          <app-home></app-home> <!-- <app-home> foi a tag criada e definida como seletor no home.component  -->
        </section>
      </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}


// Angular apps are built around components, which are Angular's building blocks. Components contain the code, HTML layout, and CSS style information that provide the function and appearance of an element in the app. In Angular, components can contain other components. An app's functions and appearance can be divided and partitioned into components.'
