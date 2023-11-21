import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomersService } from 'src/app/features/customer/services/customer.service';
import { loginService } from 'src/app/features/login/login.service';

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

  constructor(private loginService: loginService) {

  }

  active: boolean
  activeMenuTab = 'Login'
  activeMenuUrl = './login'

  ngOnInit(): void {
    console.log(this.loginService.retrievCustomer())
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
