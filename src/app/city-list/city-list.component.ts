import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityService, City } from '../services/city.service';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cities = this.cityService.getCities();
  }

  deleteCity(city: City): void {
    const index = this.cities.indexOf(city);
    if (index !== -1) {
      this.cities.splice(index, 1);
    }
  }

  toggleVisited(city: City) {
    city.visited = !city.visited;
  }
}
