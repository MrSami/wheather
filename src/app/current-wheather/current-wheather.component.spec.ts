import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../weather/weather.service';
import { WeatherServiceFake } from '../weather/weather.service.fake';
import { CurrentWheatherComponent } from './current-wheather.component';

describe('CurrentWheatherComponent', () => {
  let component: CurrentWheatherComponent;
  let fixture: ComponentFixture<CurrentWheatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWheatherComponent],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWheatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
