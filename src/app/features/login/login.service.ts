import { Injectable } from '@angular/core';
import { LoginModal } from './models/login.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { convertSnaps } from 'src/app/shared/services/db-utils';
import { CustomerModal } from 'src/app/customer/models/customer.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class loginService {

  private number: LoginModal = { phoneNumber: 'Principles' }

  constructor(private db: AngularFirestore) {

  }

  getBooksList() {
    return this.number;
  }

  createUser(number: string) {
    console.log(number)
    this.getCustomerByNumber(number)
  }

  getCustomerByNumber(number: string): Observable<CustomerModal>  {
    return this.db.collection('rooms',
      ref => ref.where('number', '==', number))
      .get()
      .pipe(
        map(result => {
          const customers = convertSnaps<CustomerModal>(result);
          return customers.length === 1 ? customers[0] : null
        })
      )
  }
}