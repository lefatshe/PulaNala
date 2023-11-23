import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    isLoggedIn$: Observable<boolean>;
    isLoggedOutIn$: Observable<boolean>;
    pictureUrl$: Observable<string>;
    displayName$: Observable<string>;
    phoneNumber$: Observable<string>;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router) {

        // afAuth.idToken.subscribe((jwt) => {
        //     console.log('jwt', jwt)
        // })

        afAuth.authState.subscribe((auth) => {
            console.log('auth', auth)
        })

        this.isLoggedIn$ = afAuth.authState.pipe(
            map(user => !!user)
        )

        this.isLoggedOutIn$ = this.isLoggedIn$.pipe(
            map(loggedIn => !loggedIn)
        )

        this.pictureUrl$ = afAuth.authState.pipe(
            map(user => user ? user.photoURL : null)
        )

        this.displayName$ = afAuth.authState.pipe(
            map(user => user ? user.displayName : null)
        )

        this.phoneNumber$ = afAuth.authState.pipe(
            map(user => user ? user.phoneNumber : null)
        )

    }


    logout() {
        // console.log('logout')
        // this.afAuth.signOut;
        // this.router.navigateByUrl('/login')
        return this.afAuth.signOut().then(() => {

            localStorage.removeItem('user');

            this.router.navigate(['sign-in']);

        });
    }

    getUser() {
        let usr 
        this.afAuth.authState.pipe(
            map(user => console.log(user))
        )
        console.log(usr)
        return usr
    }

}