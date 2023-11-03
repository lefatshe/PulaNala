import { Component, OnInit } from '@angular/core';
import { RoomModal } from '../../models/room.model';
import { RoomsList } from './data';
import { RoomsService } from '../../services/rooms.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  list = RoomsList
  listRooms$: Observable<RoomModal[]>;
  deletedItem: RoomModal
  

  constructor(
    private roomService: RoomsService
  ) { }

  ngOnInit(): void {
    this.reLoadRooms()
  }

  reLoadRooms() {
    this.listRooms$ = this.roomService.getAllRooms('STANDARD');
  }

  onDelete(e) {
    this.deletedItem = null
    this.deletedItem = e
  }

}
