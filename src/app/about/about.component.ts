import {Component, OnInit} from '@angular/core';


import 'firebase/firestore';

import {AngularFirestore} from '@angular/fire/firestore';
import {COURSES, findLessonsForCourse} from './db-data';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {

    constructor(private db: AngularFirestore) {
    }

    async uploadData() {
        const coursesCollection = this.db.collection('courses');
        const courses = await this.db.collection('courses').get();
        for (let course of Object.values(COURSES)) {
            const newCourse = this.removeId(course);
            const courseRef = await coursesCollection.add(newCourse);
            const lessons = await courseRef.collection('lessons');
            const courseLessons = findLessonsForCourse(course['id']);
            console.log(`Uploading course ${course['description']}`);
            for (const lesson of courseLessons) {
                const newLesson = this.removeId(lesson);
                delete newLesson.courseId;
                await lessons.add(newLesson);
            }
        }
    }

    removeId(data: any) {
        const newData: any = {...data};
        delete newData.id;
        return newData;
    }


    onReadSingleDoc(){
        this.db.doc('/courses/1VwF6W1atIxunWge2coG').get()
            .subscribe(snap => {
                console.log(snap.id);
                console.log(snap.data());
            })
    }

    onReadAllDocs(){
        this.db.collection(
            '/courses/6V1cT5nlcrgJAiSYcFXg/lessons'
        ).get()
            .subscribe(snaps => {
                snaps.forEach(snap => {
                    console.log(snap.id);
                    console.log(snap.data());
                });
            });
    }

    // tslint:disable-next-line:typedef
    onReadBySeqNo(){
        this.db.collection(
            "/courses/Ddg0ygPfaTdYRiPAcSvs/lessons",
            ref => ref.where("seqNo","==",1)).get()
            .subscribe(snaps => {
                snaps.forEach(snap => {
                    console.log(snap.id);
                    console.log(snap.data());
                });
            });
    }

    onReadSequenceLessThan(){
        this.db.collection(
            "/courses/Ddg0ygPfaTdYRiPAcSvs/lessons",
            ref => ref.where("seqNo","<=",3).orderBy('seqNo')).get()
            .subscribe(snaps => {
                snaps.forEach(snap => {
                    console.log(snap.id);
                    console.log(snap.data());
                });
            });
    }

    // onReadSequenceNumber(){
    //     this.db.collection(
    //         "/courses/Ddg0ygPfaTdYRiPAcSvs/lessons",
    //         ref => ref
    //             .where("seqNo","<=",3)
    //             .orderBy('seqNo')).get()
    //         .subscribe(snaps => {
    //             snaps.forEach(snap => {
    //                 console.log(snap.id);
    //                 console.log(snap.data());
    //             });
    //         });
    // }

    onReadCollection(){

        this.db.collectionGroup("lessons",
            ref => ref.where("seqNo", "==", 1) )
            .get()
            .subscribe(snaps => {
                snaps.forEach(snap => {
                    console.log(snap.id);
                    console.log(snap.data());
                });
            });
    }

    onValueChangeDoc(){
        this.db.doc('/courses/1VwF6W1atIxunWge2coG')
            .snapshotChanges()
            .subscribe(snap => {
                console.log(snap.payload.id);
                console.log(snap.payload.data());
            });
    }
}
















