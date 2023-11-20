import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { tap } from 'rxjs/internal/operators/tap';
import { EditComponent } from 'src/app/rooms/components/edit/edit.component';
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
  @Output() roomEdited = new EventEmitter();

  constructor(
    private roomService: RoomsService,
    private router: Router,
    private dialog: MatDialog
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

  editCourse(room: RoomModal) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.minWidth = "400px";

    dialogConfig.data = this.room;

    this.dialog.open(EditComponent, dialogConfig)
      .afterClosed()
      .subscribe(val => {
        console.log(val)
        this.router.navigateByUrl('/manage-room')
        if (val) {
          this.roomEdited.emit();
        }
      });

  }

}
