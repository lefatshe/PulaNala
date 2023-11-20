import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  ui: firebaseui.auth.AuthUI

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.afAuth.app.then(app => {

      const uiConfig: any = {
        signInOptions: [
          firebase.default.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.default.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.default.auth.PhoneAuthProvider.PROVIDER_ID,
        ],
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
    console.log('login result ', result)
    // this.router.navigateByUrl("")
    // this.form.reset()
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy() {
    this.ui.delete();
  }

}
