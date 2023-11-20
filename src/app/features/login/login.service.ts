import { Injectable } from '@angular/core';
import { LoginModal } from './models/login.modal';

@Injectable({ providedIn: 'root' })
export class loginService {

  private number: LoginModal = { phoneNumber: 'Principles' }
  

  getBooksList() {
    return this.number;
  }

  createUser(number: string) {
    console.log(number)
  }

}