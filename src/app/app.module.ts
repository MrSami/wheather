import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWheatherComponent } from './current-wheather/current-wheather.component';
import { WeatherService } from './weather/weather.service';

@NgModule({
  declarations: [AppComponent, CurrentWheatherComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
