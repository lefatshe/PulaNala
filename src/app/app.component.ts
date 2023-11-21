import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { loginService } from './features/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public user: UserService, private login: loginService) {

  }

  ngOnInit() {
    console.log(this.login.retrievCustomer())
  }

  logout() {
    this.user.logout()
  }

  onActivate(event) {
    console.log(event)
  }

}
