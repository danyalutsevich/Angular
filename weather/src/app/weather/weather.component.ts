import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData: any;
  weatherIconUrl: string = "";
  weatherTemperature: number = 0;
  weatherDescription: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const apiKey = '8862afdf7002f4f8a9bf6027aafb6926';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        this.http.get(apiUrl).subscribe((data: any) => {
          this.weatherData = data;
          this.weatherIconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
          this.weatherTemperature = Math.round(data.main.temp);
          this.weatherDescription = data.weather[0].description;
        });
      });
    }
  }

}
