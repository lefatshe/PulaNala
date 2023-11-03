import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/internal/operators/tap';
import { RoomModal } from 'src/app/rooms/models/room.model';
import { RoomsService } from 'src/app/rooms/services/rooms.service';

@Component({
  selector: 'app-manage-button',
  templateUrl: './manage-button.component.html',
  styleUrls: ['./manage-button.component.css']
})
export class ManageButtonComponent implements OnInit {
  loader: boolean

  @Input() room: any;
  @Output() itemDelete = new EventEmitter<RoomModal>();

  constructor(
    private roomService: RoomsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onDelete() {
    const id = this.room.id
    this.loader = true
    this.roomService.deleteRoom(id)
      .pipe(
        tap(() => {
          console.log('Delete', this.room);
          this.loader = false
          this.router.navigateByUrl('/manage-room');
          this.itemDelete.emit(this.room)
        }),
        catchError(error => {
          console.log(error);
          alert('Could not delete');
          return throwError(error)
        })
      )
      .subscribe()
  }

}
