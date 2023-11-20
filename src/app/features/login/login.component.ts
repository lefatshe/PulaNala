import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';
import { CustomersService } from 'src/app/customer/services/customer.service';
import { catchError, tap} from 'rxjs/operators';
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
    console.log('login result ', result.user)
    this.service.createUser(result.user.phonenumber)
    // this.router.navigateByUrl("")
    // this.form.reset()
    // this.router.navigateByUrl('/home');
    // this.customer.retrieveCustomerByPhone(result.phoneNumber)
    //   .pipe(
    //     tap(res => {
    //       console.log(res)
    //       // this.addedItem = room
    //       // this.loader = false
    //       // this.form.reset()
    //       // this.router.navigateByUrl('/manage-room');
    //     }),
    //     catchError(err => {
    //       console.log(err);
    //       alert('could not create');
    //       return throwError(err);
    //     }),
    //   )
    //   .subscribe();

  }

  loginManually(){
    const number = '077891922121'
    // console.log(number)
    this.Customer$ = this.service.createUser(number)
  }

  ngOnDestroy() {
    this.ui.delete();
  }

}
