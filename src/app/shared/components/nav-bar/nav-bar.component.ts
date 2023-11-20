import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() isLoggedOut: boolean
  @Input() isLoggedIn: boolean
  @Input() pictureUrl: string
  @Input() displayName: string
  @Input() phoneNumber: string


  @Output() signOutUser = new EventEmitter<string>();


  active: boolean
  activeMenuTab = 'Login'
  activeMenuUrl = './login'


  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    this.signOutUser.emit()
  }

  logIn() {

  }

  updateActiveState(id) {
    if (id == 'Home') {
      this.activeMenuUrl = '/login'
      return this.activeMenuTab = 'Login'
    }
    if (id == 'Login') {
      this.activeMenuUrl = '/'
      return this.activeMenuTab = 'Home'
    }

    console.log(this.activeMenuTab)
  }


}
