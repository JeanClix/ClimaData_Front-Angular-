import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWorldComponent } from './weather-world.component';

describe('WeatherWorldComponent', () => {
  let component: WeatherWorldComponent;
  let fixture: ComponentFixture<WeatherWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
