import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {Course} from '../model/course';
import {catchError, concatMap, last, map, take, tap} from 'rxjs/operators';
import {from, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import {CoursesService} from '../services/courses.service';

@Component({
    selector: 'create-course',
    templateUrl: 'create-course.component.html',
    styleUrls: ['create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
    courseId: string;

    form = this.fb.group({
        category: ['BEGINNER', Validators.required],
        description: ['', Validators.required],
        url: ['', Validators.required],
        longDescription: ['', Validators.required],
        promo: [false, Validators.required],
        promoStartAt: [null],
    });

    constructor(
        private fb: FormBuilder,
        private courseService: CoursesService,
        private afs: AngularFirestore,
        private router: Router
    ) {

    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.courseId = this.afs.createId();
    }

    // tslint:disable-next-line:typedef
    onCreate() {
        const val = this.form.value;

        const newCourse: Partial<Course> = {
            description: val.description,
            url: val.url,
            longDescription: val.longDescription,
            promo: val.promo,
            categories: [val.category]
        };

        newCourse.promoStartAt = Timestamp.fromDate(this.form.value.promoStartAt);

        this.courseService.createCourses(newCourse, this.courseId)
            // @ts-ignore
            .pipe(
                tap(course => {
                    console.log('created new', this.courseId);
                    this.router.navigateByUrl('/courses');
                }),
                catchError(err => {
                    console.log(err);
                    alert('could not create');
                    return throwError(err);
                })
            )
            .subscribe();
    }

}
