import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { RoomModal } from '../../rooms/models/room.model';
import firebase from 'firebase/app';
import OrderByDirection = firebase.firestore.OrderByDirection
import { convertSnaps } from 'src/app/shared/services/db-utils';


@Injectable({
    providedIn: 'root'
})
export class BookingService {
    constructor(private db: AngularFirestore) {
    }

    getUserBookings(userId: any): Observable<RoomModal[]> {
        return this.db.collection('bookings',
            ref => ref.where('isCustomerref', '==', userId)
        )
            .get()
            .pipe(map(results => convertSnaps<RoomModal>(results)));
    }

    // getRoomByUrl(courseUrl: string): Observable<RoomModal | null> {

    //     return this.db.collection('rooms',
    //         ref => ref.where('url', '==', courseUrl))
    //         .get()
    //         .pipe(
    //             map(result => {
    //                 const courses = convertSnaps<RoomModal>(result);
    //                 return courses.length === 1 ? courses[0] : null
    //             })
    //         )

    // }

    // createNewRoom(newRoom: Partial<RoomModal>, roomId?: string) {
    //     return this.db.collection('rooms',
    //         ref => ref.orderBy('seqNo', 'desc').limit(1))
    //         .get()
    //         .pipe(
    //             concatMap(result => {
    //                 const rooms = convertSnaps<RoomModal>(result);

    //                 const lastroom = rooms[0]?.seqNo ?? 0;

    //                 const room = {
    //                     ...newRoom,
    //                     seqNo: lastroom + 1
    //                 };

    //                 let save$: Observable<any>;

    //                 if (roomId) {
    //                     save$ = from(this.db.doc(`rooms/${roomId}`).set(room));
    //                 } else {
    //                     // @ts-ignore
    //                     save$ = (this.db.collection('rooms').add(room));
    //                 }

    //                 return save$
    //                     .pipe(
    //                         map(res => {
    //                             return {
    //                                 id: roomId ?? res.id,
    //                                 ...room
    //                             };
    //                         })
    //                     );

    //             })
    //         );
    // }

    // deleteRoom(roomId: string) {
    //     return from(this.db.doc(`rooms/${roomId}`).delete());
    // }

    updateBookingStatus(bookingId: string, changes: Partial<RoomModal>): Observable<any> {
        return from(this.db.doc(`bookings/${bookingId}`).update(changes));
    }

}
