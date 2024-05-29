import { Injectable } from '@angular/core';

export interface City {
  city: string;
  country: string;
  month: string;
  visited: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = [];

  constructor() { }

  getCities(): City[] {
    return this.cities;
  }

  addCity(city: City): void {
    this.cities.push(city);
  }

  deleteCity(city: City): void {
    this.cities = this.cities.filter(c => c !== city);
  }

  updateCity(updatedCity: City): void {
    const index = this.cities.findIndex(c => c.city === updatedCity.city && c.country === updatedCity.country && c.month === updatedCity.month);
    if (index > -1) {
      this.cities[index] = updatedCity;
    }
  }
}
