import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModal } from '../../models/customer.model';
import {RoomsService} from '../../../rooms/services/rooms.service';


@Component({
    selector: 'app-view-customer',
    templateUrl: 'view.component.html'
})
export class ViewCustomerComponent {
    customer: CustomerModal | unknown;

    constructor(
        public route: ActivatedRoute,
        public fb: FormBuilder,
        public router: Router,
        public bookingService: RoomsService,
        private afAuth: AngularFireAuth,
    ) {

        this.route.queryParams
            .subscribe(params => {
                this.customer = params;
            }
            );



    }

    ngOnInit() {
        console.log(this.route.snapshot.data.details);
        console.log(this.customer);
    }
}
