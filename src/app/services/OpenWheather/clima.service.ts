import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private baseURL: string = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey: string = '735a30801546cbeab7ea0db836eb20f5';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string, countryCode: string): Observable<any> {
    const url = `${this.baseURL}?q=${cityName},${countryCode}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
