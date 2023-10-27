import { Course } from '../../model/course';
import { Injectable } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Observable } from 'rxjs';
import { findCourseById } from '../../about/db-data';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CourseResolver implements Resolve<Course> {

    constructor(private courseService: CoursesService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Course | Observable<Course> | Promise<Course> {

        const courseUrl = route.paramMap.get('courseUrl');

        return this.courseService.findCourseByUrl(courseUrl)
    }

}