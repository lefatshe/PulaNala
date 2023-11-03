import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { RoomModal } from '../models/room.model';
import firebase from 'firebase/app';
import OrderByDirection = firebase.firestore.OrderByDirection
import { convertSnaps } from 'src/app/shared/services/db-utils';


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
    
    deleteRoom(roomId: string) {
        return from(this.db.doc(`rooms/${roomId}`).delete());
    }

}