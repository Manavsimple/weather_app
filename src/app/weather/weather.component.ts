import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.component.html', standalone:true,
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  myweather: any;
  temperature:number=0;
  feelslike:number=0;
  pressure:number=0;
  Humidity:number=0;
  summary:string='';
  iconurl:string='';
  city: string='kadi';
  units:string='metric';


  constructor(private WeatherService: WeatherService ) {}

  ngOnInit(): void {
   this.WeatherService.getweather(this.city, this.units).subscribe({
    next:(res) => {
      console.log(res);
      this.myweather=res;
      console.log(this.myweather);
      this.temperature = this.myweather.main.temp;
      this.feelslike = this.myweather.main.feels_like;
      this.pressure = this.myweather.main.pressure;
      this.Humidity = this.myweather.main.humidity;
      this.summary = this.myweather.weather[0].main;

      this.iconurl = 'https://openweathermap.org/img/wn/' + this.myweather.weather[0].icon + '@2x.png';
    },
    error: (error) => console.log(error.message),
    complete: () => console.info('API call completed')
   })
  }

}
