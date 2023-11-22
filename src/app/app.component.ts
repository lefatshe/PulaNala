import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { loginService } from './features/login/login.service';
import {ModalPopupService} from './shared/services/modal-po-up.service';
import {MatDialogRef} from '@angular/material/dialog';
import {IdleComponent} from './shared/services/idle.component';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 6';

  intervalPart: any;
  idleState = 'Not started.';
  timedOut = false;
  min: any;
  sec: any;
  dialogRef: MatDialogRef<any>;
  constructor(private modalPopupService: ModalPopupService, public user: UserService, private login: loginService) { }
  openDialog() {
    this.dialogRef = this.modalPopupService.openPopup<IdleComponent>(IdleComponent, null);
    this.dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
    this.showSignUpPopUp();
  }

  showSignUpPopUp(){
    this.intervalPart = interval(500);
    this.intervalPart.subscribe((res) => {
      const isModalPop = sessionStorage.getItem('home-sign-up-pop-up');
      if (res === 9 && !isModalPop) { this.openDialog(); sessionStorage.setItem('home-sign-up-pop-up', String(true)); }
    });
  }
  logout() {
    this.user.logout()
  }

  onActivate(event) {
    console.log(event)
  }

}
