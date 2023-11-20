import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public user: UserService) {

  }

  ngOnInit() {

  }

  logout() {
    this.user.logout()
  }

  onActivate(event) {
    console.log(event)
  }

}
