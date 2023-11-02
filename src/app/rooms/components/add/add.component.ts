import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

import { catchError, concatMap, last, map, take, tap } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import { RoomsService } from '../../services/rooms.service';
import { RoomModal } from '../../models/room.model';
import { scrollWindowToTop } from '../../../shared/services/scroll-to-top'

@Component({
    selector: 'add-room',
    templateUrl: 'add.component.html'
})
export class AddRoomComponent implements OnInit {
    time = Timestamp
    roomId: string;
    loader: boolean;
    addedItem = null


    form = this.fb.group({
        longDescription: ['', Validators.required],
        shortDescription: ['', Validators.required],
        roomNumber: [''],
        title: ['', Validators.required],
        url: [''],
        promo: [false],
        promoStartAt: [null],
    });

    constructor(
        private fb: FormBuilder,
        private roomService: RoomsService,
        private afs: AngularFirestore,
        private router: Router
    ) {

    }

    @HostListener("click", ["$event"]) click($event: Event) {
        $event.preventDefault();
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.roomId = this.afs.createId();
    }


    // tslint:disable-next-line:typedef
    onCreate() {
        const val = this.form.value;
        const randomNumber = Math.floor(Math.random() * 10000) + 1

        const newRoom: Partial<RoomModal> = {
            longDescription: val.longDescription,
            shortDescription: val.shortDescription,
            roomNumber: randomNumber.toString(),
            title: val.title,
            url: val.title.replace(/\s+/g, '-').toLowerCase(),
            promo: val.promo,
            promoStartAt: val.promoStartAt
        };

        newRoom.promoStartAt = this.form.value.promoStartAt ? this.time.fromDate(this.form.value.promoStartAt) : null;
    
        this.loader = true
        this.addedItem = null

        this.roomService.createNewRoom(newRoom, this.roomId)
            // @ts-ignore
            .pipe(
                tap(room => {
                    this.addedItem = room
                    this.loader = false
                    this.form.reset()
                    this.router.navigateByUrl('/rooms');
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