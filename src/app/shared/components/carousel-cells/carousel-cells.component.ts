import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {RoomsList} from '../../../features/rooms/components/view/data';
import {RoomModal} from '../../../features/rooms/models/room.model';
import {RoomsService} from '../../../features/rooms/services/rooms.service';

@Component({
  selector: 'app-carousel-cells',
  templateUrl: './carousel-cells.component.html',
  styleUrls: ['./carousel-cells.component.css']
})
export class CarouselCellsComponent implements OnInit {
  list = RoomsList;
  listRooms: RoomModal[] = [];
  deletedItem: RoomModal;


  constructor(
      private roomService: RoomsService
  ) {
    this.roomService.getAllRooms('')
        .subscribe(res => this.listRooms = res);
  }

  ngOnInit(): void {
  }


}
