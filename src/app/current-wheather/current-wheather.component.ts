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

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Bethesda', 'US')
      .subscribe((data) => (this.current = data));
  }
}
