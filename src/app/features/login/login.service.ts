import { Injectable } from '@angular/core';
import { LoginModal } from './models/login.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { convertSnaps } from 'src/app/shared/services/db-utils';
import { CustomerModal } from 'src/app/features/customer/models/customer.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class loginService {

  number: LoginModal = { phoneNumber: 'Principles' }
  customer: CustomerModal

  constructor(private db: AngularFirestore) {

  }

  getBooksList() {
    return this.number;
  }

  retrievCustomer() {
    console.log("this.customer", this.customer)
    return this.customer
  }

  customerObj(obj){
    this.customer = obj
  }

  removeCustomer() {
    this.customer = null
  }

  createUser(number: string) {
    console.log(number)
    this.getCustomerByNumber(number)
  }

  getCustomerByNumber(number: string): Observable<CustomerModal> {
    return this.db.collection('customer',
      ref => ref.where('number', '==', number))
      .get()
      .pipe(
        map(result => {
          const customers = convertSnaps<CustomerModal>(result);
          return customers.length === 1 ? customers[0] : null
        })
      )
  }

  setThisCustomer(customer: CustomerModal) {
    this.customer = customer
  }

}