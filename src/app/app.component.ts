import { Component } from '@angular/core';
import { CityFormComponent } from './city-form/city-form.component';
import { CityListComponent } from './city-list/city-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CityFormComponent, CityListComponent],
  template: `
    <app-city-form></app-city-form>
    <app-city-list></app-city-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
