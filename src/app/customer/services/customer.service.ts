import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { CustomerModal } from '../models/customer.model';
import firebase from 'firebase/app';
import OrderByDirection = firebase.firestore.OrderByDirection
import { convertSnaps } from 'src/app/shared/services/db-utils';



@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    constructor(private db: AngularFirestore) {
    }


    createNewCustomer(newCustomer: Partial<CustomerModal>, customerId?: string) {
        return this.db.collection('customer',
            ref => ref.orderBy('seqNo', 'desc').limit(1))
            .get()
            .pipe(
                concatMap(result => {

                    const customers = convertSnaps<CustomerModal>(result);

                    const lastCustomer = customers[0]?.seqNo ?? 0;

                    const customer = {
                        ...newCustomer,
                        seqNo: lastCustomer + 1
                    };

                    let save$: Observable<any>;

                    if (customerId) {
                        save$ = from(this.db.doc(`customer/${customerId}`).set(customer));
                    } else {
                        // @ts-ignore
                        save$ = (this.db.collection('customer').add(customer));
                    }

                    return save$
                        .pipe(
                            map(res => {
                                return {
                                    id: customerId ?? res.id,
                                    ...customer
                                };
                            })
                        );

                })
            );
    }

    retrieveCustomer(customerId: string): Observable<CustomerModal | null> {

        console.log("customerId", customerId)

        return this.db.collection('customer',
            ref => ref.where('id', '==', customerId))
            .get()
            .pipe(
                map(result => {
                    const customer = convertSnaps<CustomerModal>(result);
                    return customer.length === 1 ? customer[0] : null
                })
            )
    }

    retrieveCustomerByPhone(phoneNumber: string): Observable<CustomerModal | null> {

        console.log("customerId", phoneNumber)

        return this.db.collection('customer',
            ref => ref.where('number', '==', phoneNumber))
            .get()
            .pipe(
                map(result => {
                    const customer = convertSnaps<CustomerModal>(result);
                    return customer.length === 1 ? customer[0] : null
                })
            )
    }

}