import { Component, HostListener, OnInit } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomModal } from './models/room.model';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  room: RoomModal

  isPers: boolean
  isToday: boolean = true
  isTime: boolean

  @HostListener("click", ["$event"]) click($event: Event) {
    $event.preventDefault();
  }

  form = this.fb.group({
    isPers: ['2', Validators.required],
    isToday: ['', Validators.required],
    isTime: ['15:00 - 16:00'],
    isDaysNo: ['2', Validators.required],
    isRoom: [null],
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.room = this.route.snapshot.data['details'];
    console.log("view room", this.room)
  }

  activateBlockView(expression: string) {
    this.isPers = false
    this.isToday = false
    this.isTime = false

    switch (expression) {
      case 'person':
        this.isPers = true
        break;
      case 'date':
        this.isToday = true
        break;
      case 'time':
        this.isTime = true
        break;
      default:
      // code block
    }
  }

  setIsTime(time: string) {
    this.form.controls['isTime'].setValue(time)
  }

  setIsPers(pers: string) {
    this.form.controls['isPers'].setValue(pers)
  }

  onCreate() {
    const form = this.form.value

    const urlPath = `booking/${this.room.url}`

    form.isToday = moment(form.isToday).format('D.M.YYYY')

    this.router.navigate([urlPath],
      {
        queryParams: {
          isDaysNo: form.isDaysNo,
          isPers: form.isPers,
          isTime: form.isTime,
          isToday: form.isToday,
          isRoom: this.room.id
        }
      }
    );

  }
}
