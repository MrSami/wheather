import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';
@Component({
  selector: 'app-current-wheather',
  templateUrl: './current-wheather.component.html',
  styleUrls: ['./current-wheather.component.css'],
})
export class CurrentWheatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: 0,
      image: '',
      temperature: 0,
      description: '',
    };
  }

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Bethesda', 'US')
      .subscribe((data) => (this.current = data));
  }
}
