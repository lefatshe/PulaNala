import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import { Category, Sex } from 'src/app/shared/data';
import { CustomersService } from "../../services/customer.service";
import { CustomerModal } from '../../models/customer.model';
import { catchError, concatMap, last, tap } from 'rxjs/operators';

@Component({
    selector: 'app-add-customer',
    templateUrl: 'add.component.html'
})
export class AddCustomerComponent implements OnInit {
    time = Timestamp;
    customerId: string;
    loader: boolean;
    addedItem = null;
    percentage

    percentages$: Observable<number>;
    iconUrl = '';

    categoryOptions = Sex;
    formCapture: boolean


    form = this.fb.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        avator: [''],
        number: ['', Validators.required],
        email: ['', Validators.required],
        male: ['', Validators.required],
        created: ['']
    });

    constructor(
        private fb: FormBuilder,
        private customerService: CustomersService,
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
        this.customerId = this.afs.createId();
    }


    // tslint:disable-next-line:typedef
    onCreate() {
        const val = this.form.value;
        const randomNumber = Math.floor(Math.random() * 10000) + 1
        const nowDate = new Date();

        const newCustomer: Partial<CustomerModal> = {
            id: this.customerId,
            name: val.name,
            lastname: val.lastname,
            // avator: val.avator,
            number: val.number,
            email: val.email,
            male: val.male,
            created: nowDate
        };


        this.loader = true
        this.addedItem = null

        this.customerService
            .createNewCustomer(newCustomer, this.customerId)
            .pipe(
                tap(room => {
                    this.addedItem = room
                    this.loader = false
                    // this.form.reset()
                    // this.router.navigateByUrl(`/info/${this.customerId}`);
                    this.formCapture = true
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