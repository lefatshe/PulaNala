import {Component, Inject, OnInit} from '@angular/core';
import { Observable, interval } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-idle',
    templateUrl: 'idle.component.html'
})
export class IdleComponent implements OnInit {
    interval: number;
    intervalPart: any;
    constructor(public dialogRef: MatDialogRef<IdleComponent>) {}
    ngOnInit(): void {
        // this.intervalPart = interval(500);
        // this.intervalPart.subscribe((res) => {
        //     console.log(res);
        // });
    }
    onClose(response: boolean) {
        // this.intervalPart.unsubscribe();
        this.dialogRef.close(response);
    }
}
