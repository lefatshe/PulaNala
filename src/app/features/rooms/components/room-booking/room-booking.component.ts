import { Component, OnInit } from '@angular/core';
import { RoomModal } from '../../models/room.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BookingModal } from '../../models/booking.model';
import { RoomsService } from '../../services/rooms.service';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { UserService } from 'src/app/shared/services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { logging } from 'protractor';
import { loginService } from 'src/app/features/login/login.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit {

  booking: BookingModal | any;
  room: RoomModal;
  loader: boolean;
  user: unknown;

  bookingId: string;

  activeMenuTab = 'Login'
  activeMenuUrl = './login'

  constructor(
    public route: ActivatedRoute,
    public fb: FormBuilder,
    public router: Router,
    public bookingService: RoomsService,
    private afAuth: AngularFireAuth,
    public log: loginService,

    private afs: AngularFirestore
  ) {

    this.route.queryParams
      .subscribe(params => {
        this.booking = params
      }
      );

    this.afAuth.authState.subscribe(res => this.user = res);

  }

  ngOnInit() {
    this.room = this.route.snapshot.data['details'];
    this.bookingId = this.afs.createId();
    // this.booking.isCustomerref = this.log?.customer?.id || null;
  }

  complete() {
    this.loader = true;
    window.scrollTo({ top: 100, left: 100, behavior: 'smooth' });
    this.bookingService.createBooking(this.booking, this.bookingId, this.bookingId)
      .pipe(
        tap(room => {
          this.loader = false;
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
