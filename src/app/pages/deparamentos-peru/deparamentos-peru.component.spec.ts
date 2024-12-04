import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparamentosPeruComponent } from './deparamentos-peru.component';

describe('DeparamentosPeruComponent', () => {
  let component: DeparamentosPeruComponent;
  let fixture: ComponentFixture<DeparamentosPeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeparamentosPeruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparamentosPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
