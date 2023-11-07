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
import { Category } from 'src/app/shared/data';

@Component({
    selector: 'add-room',
    templateUrl: 'add.component.html'
})
export class AddRoomComponent implements OnInit {
    time = Timestamp
    roomId: string;
    loader: boolean;
    addedItem = null

    percentages$: Observable<number>;
    iconUrl = ''

    categoryOptions = Category


    form = this.fb.group({
        longDescription: ['', Validators.required],
        shortDescription: ['', Validators.required],
        roomNumber: [''],
        title: ['', Validators.required],
        url: [''],
        promo: [false],
        promoStartAt: [null],
        // category: ['STANDARDR', Validators.required],
        dateCreated: [null],
        imageUrl: ['', Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        private roomService: RoomsService,
        private afs: AngularFirestore,
        private router: Router,
        private storage: AngularFireStorage
    ) {

    }

    // @HostListener("click", ["$event"]) click($event: Event) {
    //     $event.preventDefault();
    // }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.roomId = this.afs.createId();
    }


    // tslint:disable-next-line:typedef
    onCreate() {
        const val = this.form.value;
        const randomNumber = Math.floor(Math.random() * 10000) + 1
        const nowDate = new Date();
        const newRoom: Partial<RoomModal> = {
            id: this.roomId,
            longDescription: val.longDescription,
            shortDescription: val.shortDescription,
            roomNumber: randomNumber.toString(),
            title: val.title,
            url: val.title.replace(/\s+/g, '-').toLowerCase(),
            promo: val.promo,
            promoStartAt: val.promoStartAt,
            // category: val.category,
            dateCreated: nowDate
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
                    this.router.navigateByUrl('/manage-room');
                }),
                catchError(err => {
                    console.log(err);
                    alert('could not create');
                    return throwError(err);
                }),
            )
            .subscribe();
    }

    onFileUpload(event) {
        console.log(event)

        const file: File = event.target.files[0]

        const filePath = `rooms/${this.roomId}${file.name}`

        const task = this.storage.upload(filePath, file, {
            cacheControl: "max-age=2658799, public"
        })

        this.percentages$ = task.percentageChanges();

        task.snapshotChanges()
            .pipe(
                last(),
                concatMap(() => this.storage.ref(filePath).getDownloadURL()),
                tap(url => {
                    this.iconUrl = url;
                    this.form.controls.imageUrl.setValue(url)
                }),
                catchError(err => {
                    console.log(err);
                    alert("Could not upload!")
                    return throwError(err)
                })
            )
            .subscribe()

    }

}