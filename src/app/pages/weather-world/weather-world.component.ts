import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ClimaService } from '../../services/OpenWheather/clima.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-world',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './weather-world.component.html',
  styleUrl: './weather-world.component.css'
})
export class WeatherWorldComponent {
  city: string = '';
  countryCode: string = '';
  weatherData: any;

  constructor(private climaService: ClimaService) {}

  onSubmit() {
    this.climaService.getWeather(this.city, this.countryCode).subscribe(
      data => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      error => {
        console.error(error);
      }
    );
  }
}
