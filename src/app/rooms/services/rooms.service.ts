import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { RoomModal } from '../models/room.model';
import firebase from 'firebase/app';
import OrderByDirection = firebase.firestore.OrderByDirection
import { convertSnaps } from 'src/app/shared/services/db-utils';
import { BookingModal } from '../models/booking.model';


@Injectable({
    providedIn: 'root'
})
export class RoomsService {
    constructor(private db: AngularFirestore) {
    }

    getAllRooms(category: string): Observable<RoomModal[]> {
        return this.db.collection('rooms',
            ref => ref.orderBy('seqNo')
        )
            .get()
            .pipe(map(results => convertSnaps<RoomModal>(results)));
    }

    getRoomByUrl(courseUrl: string): Observable<RoomModal | null> {

        return this.db.collection('rooms',
            ref => ref.where('url', '==', courseUrl))
            .get()
            .pipe(
                map(result => {
                    const courses = convertSnaps<RoomModal>(result);
                    return courses.length === 1 ? courses[0] : null
                })
            )

    }

    createNewRoom(newRoom: Partial<RoomModal>, roomId?: string) {
        return this.db.collection('rooms',
            ref => ref.orderBy('seqNo', 'desc').limit(1))
            .get()
            .pipe(
                concatMap(result => {
                    const rooms = convertSnaps<RoomModal>(result);

                    const lastroom = rooms[0]?.seqNo ?? 0;

                    const room = {
                        ...newRoom,
                        seqNo: lastroom + 1
                    };

                    let save$: Observable<any>;

                    if (roomId) {
                        save$ = from(this.db.doc(`rooms/${roomId}`).set(room));
                    } else {
                        // @ts-ignore
                        save$ = (this.db.collection('rooms').add(room));
                    }

                    return save$
                        .pipe(
                            map(res => {
                                return {
                                    id: roomId ?? res.id,
                                    ...room
                                };
                            })
                        );

                })
            );
    }

    createBooking(newBooking: Partial<BookingModal>, roomId?: string) {
        return this.db.collection('bookings',
            ref => ref.orderBy('seqNo', 'desc').limit(1))
            .get()
            .pipe(
                concatMap(result => {
                    const bookings = convertSnaps<BookingModal>(result);

                    const lastroom = bookings[0]?.seqNo ?? 0;

                    const booking = {
                        ...newBooking,
                        seqNo: lastroom + 1
                    };

                    let save$: Observable<any>;

                    if (roomId) {
                        save$ = from(this.db.doc(`bookings/${roomId}`).set(booking));
                    } else {
                        // @ts-ignore
                        save$ = (this.db.collection('bookings').add(booking));
                    }

                    return save$
                        .pipe(
                            map(res => {
                                return {
                                    id: roomId ?? res.id,
                                    ...booking
                                };
                            })
                        );

                })
            );
    }

    deleteRoom(roomId: string) {
        return from(this.db.doc(`rooms/${roomId}`).delete());
    }

    updateRoom(roomId: string, changes: Partial<RoomModal>): Observable<any> {
        return from(this.db.doc(`rooms/${roomId}`).update(changes));
    }


    // Booking
    newBookingRooms(newBooking: Partial<BookingModal>, roomId?: string) {
        return this.db.collection(`rooms/${roomId}/bookings`,
        ref => ref.orderBy('seqNo', 'desc').limit(1))
            .get()
            .pipe(
                concatMap(result => {


                    // console.log("newBooking", newBooking)
                    // console.log("roomId", roomId)

                    // const booking = {
                    //     ...newBooking,
                    // };

                    // let save$: Observable<any>;

                    const rooms = convertSnaps<BookingModal>(result);

                    const lastroom = rooms[0]?.seqNo ?? 0;

                    const booking = {
                        ...newBooking,
                        seqNo: lastroom + 1
                    };

                    let save$: Observable<any>;

                    if (roomId) {
                        save$ = from(this.db.doc(`rooms/${roomId}/bookings/${roomId}`).set(booking));
                    } else {
                        // @ts-ignore
                        save$ = (this.db.collection(`rooms/${roomId}/bookings`).add(booking));
                    }

                    return save$
                        .pipe(
                            map(res => {
                                console.log(res)
                            })
                        );

                })

            );
    }

}