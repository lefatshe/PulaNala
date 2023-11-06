import { Component, OnInit } from '@angular/core';
import { RoomModal } from '../../models/room.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BookingModal } from '../../models/booking.model';
import { RoomsService } from '../../services/rooms.service';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit {

  booking: BookingModal | any;
  room: RoomModal;
  loader: boolean;

  constructor(
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public router: Router,
    public bookingService: RoomsService
  ) {

    this.route.queryParams
      .subscribe(params => {
        this.booking = params
      }
      );

  }

  ngOnInit() {
    this.room = this.route.snapshot.data['details'];
  }

  complete() {
    console.log(this.booking)
    // this.loader = true
    console.log(this.room.id  )

    
    this.bookingService.createBooking(this.booking, this.room.id)
      .pipe(
        tap(room => {
          console.log(room)
          this.loader = false
          this.router.navigateByUrl('/');
        }),
        catchError(err => {
          console.log(err);
          alert('could not create');
          return throwError(err);
        }),
      )
      .subscribe();
  }

}
