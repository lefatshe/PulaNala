import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';
import { RoomBookingComponent } from 'src/app/rooms/components/room-booking/room-booking.component';
import { RoomModal } from 'src/app/rooms/models/room.model';
import { RoomsService } from 'src/app/rooms/services/rooms.service';

@Component({
  selector: 'app-booking-tile',
  templateUrl: './booking-tile.component.html',
  styleUrls: ['./booking-tile.component.css']
})
export class BookingTileComponent {
  room: RoomModal
  listRooms$: Observable<RoomModal[]>;
  
  isPers: boolean
  isToday: boolean = true
  isTime: boolean

  @HostListener("click", ["$event"]) click($event: Event) {
    $event.preventDefault();
  }

  today = Date.now();
  momentDate = moment(this.today).format('D.M.YYYY')

  form = this.fb.group({
    isPers: ['2', Validators.required],
    isToday: [this.momentDate, Validators.required],
    isTime: ['15:00 - 16:00'],
    isDaysNo: ['2', Validators.required],
    isRoom: [null],
    promo: ['']
  });

  constructor(private route: ActivatedRoute,
    public fb: FormBuilder,
    private router: Router,
    private bookingService: RoomsService) {

    this.bookingService.getAllRooms('STANDARD')
    .subscribe(res => {
      console.log(res)
      this.room = res[0]
    })

  }

  bookNow() {
    console.log(this.form.value)

    this.onCreate()
  }

  onCreate() {
    const form = this.form.value

    console.log(this.room)
    const urlPath = `booking/${this.room.url}`

    // form.isToday = moment(form.isToday).format('D.M.YYYY')

    this.router.navigate([urlPath],
      {
        queryParams: {
          isDaysNo: form.isDaysNo,
          isPers: form.isPers,
          isTime: form.isTime,
          isToday: form.isToday,
          isRoomRef: this.room.id
        }
      }
    );

  }


}
