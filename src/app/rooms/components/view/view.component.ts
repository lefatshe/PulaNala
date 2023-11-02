import { Component, OnInit } from '@angular/core';
import { RoomModal } from '../../models/room.model';
import { RoomsList } from './data';
import { RoomsService } from '../../services/rooms.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  list = RoomsList

  constructor(
    private roomService: RoomsService,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
    // 
  }

}
