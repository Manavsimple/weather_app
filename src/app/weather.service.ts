import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

getweather(city: string, units: string)
{
  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=ee6f81c657cc09da88d45c2e4412c996&units=' + units);
}

}
