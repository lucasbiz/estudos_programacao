import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img
          class="listing-photo"
          [src]="housingLocation.photo" 
          alt="Exterior photo of {{ housingLocation.name }}"
          crossorigin
      /> <!-- [src] está entre colchetes pois está sinalizando que a imagem nao virá de um link ou arquivo, mas sim da propriedade "photo" do componente housingLocation  -->
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
      <!-- Onde temos propriedades entre duas chaves {{}}, é onde está sendo usada a interpolação -->
  `,
  styleUrls: ['./housing-location.component.css'],
})


export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;
}
//@Input() é chamado de decorador, permite que a propriedade receba dados de um componente pai

// You have to add the ! because the input is expecting the value to be passed. In this case, there is no default value. In our example application case we know that the value will be passed in - this is by design. The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
