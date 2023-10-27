import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {EditCourseDialogComponent} from "../edit-course-dialog/edit-course-dialog.component";
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    @Output()
    courseEdited = new EventEmitter();

    @Output()
    courseDeleted = new EventEmitter<Course>();

    constructor(
      private dialog: MatDialog,
      private router: Router,
      private courseService: CoursesService
      ) {
    }

    ngOnInit() {

    }

    editCourse(course:Course) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = "400px";

        dialogConfig.data = course;

        this.dialog.open(EditCourseDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe(val => {
                if (val) {
                    this.courseEdited.emit();
                }
            });

    }

    onDeleteCourse(course: Course){
        this.courseService.deleteCourse(course.id)
        .pipe(
            tap(() => {
                console.log('Delete', course);
                this.courseDeleted.emit(course)
            }),
            catchError(error => {
                console.log(error);
                alert('Could not delete');
                return throwError(error)
            })
        )
        .subscribe()
    }

    // deleteCoursesAndLessons
    onDeleteCoursesAndLessons(course: Course){
        this.courseService.deleteCoursesAndLessons(course.id)
        .pipe(
            tap(() => {
                console.log('Delete', course);
                this.courseDeleted.emit(course)
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









