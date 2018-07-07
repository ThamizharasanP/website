import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPageSliderComponent } from './custom-page-slider.component';

describe('CustomPageSliderComponent', () => {
  let component: CustomPageSliderComponent;
  let fixture: ComponentFixture<CustomPageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
