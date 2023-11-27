import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

import { catchError, concatMap, last, map, take, tap } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import { Category } from 'src/app/shared/data';
import {loginService} from '../login/login.service';
import {CustomersService} from '../customer/services/customer.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {BookingService} from '../booking/service/booking.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    time = Timestamp;
    roomId: string;
    loader: boolean;
    addedItem = null;
    percentages$: Observable<number>;
    iconUrl = '';
    categoryOptions = Category;

    bookList = [];

    user
    constructor(
        private fb: FormBuilder,
        private afs: AngularFirestore,
        private router: Router,
        // private user: CustomersService,
        public log: loginService,
        private storage: AngularFireStorage,
        private afAuth: AngularFireAuth,
        private bookingService: BookingService
    ) {
        // this.afAuth.authState.subscribe(res => this.user = res);
    }

    ngOnInit() {
        this.getBookings();
        this.afAuth.authState.subscribe(res => {
            this.loader = true;
            this.user = res;
        }, () => this.loader = false, () => this.loader = false);
    }

    getBookings(){
        const customerUid = this.log.customerUid;
        this.bookingService.getUserBookings(customerUid)
            .subscribe(res => {
                this.bookList = res;
            });
    }

    updateBookingStatus(item){

        item.status =  item.status === 'open' ? 'close' : 'open';


        // const st = status === 'open' ? 'closed' : 'open';
        //
        console.log(item);
        //
        // console.log(item);
        this.bookingService.updateBookingStatus(item.id, item)
            .subscribe(res => console.log(res));
    }

}
