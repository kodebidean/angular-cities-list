import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityService, City } from '../services/city.service';

@Component({
  selector: 'app-city-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent {
  city: string = '';
  country: string = '';
  month: string = '';
  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor(private cityService: CityService) {}

  onSubmit() {
    if (this.city && this.country && this.month) {
      const newCity: City = { city: this.city, country: this.country, month: this.month, visited: false };
      this.cityService.addCity(newCity);
      this.city = '';
      this.country = '';
      this.month = '';
    }
  }
}
