import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrerCardComponent } from './orer-card.component';

describe('OrerCardComponent', () => {
  let component: OrerCardComponent;
  let fixture: ComponentFixture<OrerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
