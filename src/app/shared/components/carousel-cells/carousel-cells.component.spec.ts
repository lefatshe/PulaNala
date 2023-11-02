import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCellsComponent } from './carousel-cells.component';

describe('CarouselCellsComponent', () => {
  let component: CarouselCellsComponent;
  let fixture: ComponentFixture<CarouselCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
