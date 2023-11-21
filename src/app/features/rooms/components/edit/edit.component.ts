import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomModal } from '../../models/room.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomsService } from '../../services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  form: FormGroup
  room: RoomModal

  constructor(
    private dialogRef: MatDialogRef<EditComponent>,
    private router: Router,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) room: RoomModal,
    private roomsService: RoomsService
  ) {
    this.room = room

    this.form = this.fb.group({
      longDescription: [this.room.longDescription, Validators.required],
      // shortDescription: [this.room.shortDescription, Validators.required],
      roomNumber: [this.room.roomNumber],
      title: [this.room.title, Validators.required],
      url: [this.room.url],
      promo: [this.room.promo],
      promoStartAt: [this.room.promoStartAt],
      // category: [this.room.category, Validators.required],
      dateCreated: [this.room.dateCreated],
    })
  }

  close() {
    this.dialogRef.close()
  }

  save() {
    const changes = this.form.value;

    this.roomsService.updateRoom(this.room.id, changes)
      .subscribe(() => {

        this.dialogRef.close(changes)

      });

  }

  cancel(){
    this.router.navigateByUrl('/manage-room')
    this.close()
  }

}
