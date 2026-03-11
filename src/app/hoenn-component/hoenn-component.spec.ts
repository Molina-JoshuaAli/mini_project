import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoennComponent } from './hoenn-component';

describe('HoennComponent', () => {
  let component: HoennComponent;
  let fixture: ComponentFixture<HoennComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoennComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
