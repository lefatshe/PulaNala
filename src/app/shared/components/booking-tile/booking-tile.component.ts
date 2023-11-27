import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {Observable} from 'rxjs/internal/Observable';
import {RoomModal} from '../../../features/rooms/models/room.model';
import {RoomsService} from '../../../features/rooms/services/rooms.service';
import { loginService } from 'src/app/features/login/login.service';


@Component({
    selector: 'app-booking-tile',
    templateUrl: './booking-tile.component.html',
    styleUrls: ['./booking-tile.component.css']
})
export class BookingTileComponent {

    constructor(private route: ActivatedRoute,
                public fb: FormBuilder,
                private router: Router,
                private log: loginService,
                private bookingService: RoomsService) {

        this.bookingService.getAllRooms('STANDARD')
            .subscribe(res => {
                this.room = res[0];
            });

    }

    room: RoomModal;
    listRooms$: Observable<RoomModal[]>;

    isPers: boolean;
    isToday = true;
    isTime: boolean;

    today = Date.now();
    momentDate = moment(this.today).format();

    form = this.fb.group({
        isPers: ['2', Validators.required],
        isToday: [null, Validators.required],
        isTime: ['15:00 - 16:00', Validators.required],
        isDaysNo: ['2', Validators.required],
        isRoom: [null],
        promo: ['']
    });

    @HostListener('click', ['$event']) click($event: Event) {
        $event.preventDefault();
    }



    onCreate() {
        const form = this.form.value;

        console.log(this.room);
        const urlPath = `booking/${this.room.url}`;

        // form.isToday = moment(form.isToday).format('D.M.YYYY')

        this.router.navigate([urlPath],
            {
                queryParams: {
                    isDaysNo: form.isDaysNo,
                    isPers: form.isPers,
                    isTime: form.isTime,
                    isToday: form.isToday,
                    isRoomRef: this.room.id,
                    isCustomerref: this.log?.customer?.id,
                    status: 'open'
                }
            }
        );

    }


}
