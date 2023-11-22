import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Injectable()
export class ModalPopupService {
    isAlreadyPop = false;
    constructor(private dialog: MatDialog) { }

    openPopup<T>(component: any, data: any): MatDialogRef<any> {
        return this.dialog.open(component, {
            width: '550px',
            data,
            disableClose: true
        });
    }

    closePopup(dialogRef: MatDialogRef<any>) {
        dialogRef.close('closed forcefully');
    }
}
