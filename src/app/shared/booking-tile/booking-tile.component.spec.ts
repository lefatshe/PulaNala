import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTileComponent } from './booking-tile.component';

describe('BookingTileComponent', () => {
  let component: BookingTileComponent;
  let fixture: ComponentFixture<BookingTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
