import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import { CustomersService } from 'src/app/customer/services/customer.service';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { loginService } from './login.service';
import { CustomerModal } from 'src/app/customer/models/customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  ui: firebaseui.auth.AuthUI
  Customer$: Observable<CustomerModal[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private customer: CustomersService,
    private service: loginService
  ) { }

  ngOnInit(): void {

    this.afAuth.app.then(app => {

      const uiConfig: any = {
        signInOptions: [
          // firebase.default.auth.EmailAuthProvider.PROVIDER_ID,
          // firebase.default.auth.GoogleAuthProvider.PROVIDER_ID,
          // firebase.default.auth.FacebookAuthProvider.PROVIDER_ID,
          // firebase.default.auth.TwitterAuthProvider.PROVIDER_ID,
          // firebase.default.auth.GithubAuthProvider.PROVIDER_ID,
          // firebase.default.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.default.auth.PhoneAuthProvider.PROVIDER_ID,
          // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        ],
        privacyPolicyUrl: function () {
          window.location.assign('pulanalalodge.co.za');
        },
        locale: {
          defaultLocale: 'de'
        },
        defaultCountry: 'RSA',
        defaultNationalNumber: '1234567890',
        loginHint: '+11234567890',
        whitelistedCountries: ['US', '+44', '+1'],
        callbacks: {
          signInSuccessWithAuthResult: (result) => {
            this.onLoginSuccessful(result)
          },
          uiShown: function () {
            document.getElementById('loader').style.display = 'none';
          }
        },
        signInSuccessUrl: '/',

      };

      this.ui = new firebaseui.auth.AuthUI(app.auth());

      this.ui.start('#firebaseui-auth-container', uiConfig);

      this.ui.disableAutoSignIn()
    })

  }

  onLoginSuccessful(result) {
    const customerNumber = result.user.phoneNumber
    console.log('login result ', customerNumber)
    this.login(customerNumber)
  }

  login(number: string) {
     this.service.getCustomerByNumber(number)
      .pipe(
        tap(res => {
          this.service.setThisCustomer(res)
          this.router.navigateByUrl('')
          .then(() => {
            window.location.reload();
          });
        }),
        catchError(err => {
          console.log(err);
          alert('could not create');
          return throwError(err);
        }),
      )
      .subscribe();

  }

  ngOnDestroy() {
    this.ui.delete();
  }

}
