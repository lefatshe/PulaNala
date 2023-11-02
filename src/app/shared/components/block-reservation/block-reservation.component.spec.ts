import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockReservationComponent } from './block-reservation.component';

describe('BlockReservationComponent', () => {
  let component: BlockReservationComponent;
  let fixture: ComponentFixture<BlockReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
