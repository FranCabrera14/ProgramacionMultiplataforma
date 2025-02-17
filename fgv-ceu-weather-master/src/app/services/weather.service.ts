import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forecast } from '../model/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url_service = "https://api.openweathermap.org/data/2.5/weather?units=metric";
  private api_key = "774396eca2c42b768d4825df06754bc1";

  constructor(private http: HttpClient) { }

  getWeather(latitud: string, longitud: string) {
    return this.http.get<Forecast>(`${this.url_service}&lat=${latitud}&lon=${longitud}&appid=${this.api_key}`);
  }
}
