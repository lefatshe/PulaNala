
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RoomModal } from 'src/app/rooms/models/room.model';
import { RoomsService } from 'src/app/rooms/services/rooms.service';

@Injectable({
    providedIn: 'root'
})
export class RoomResolver implements Resolve<RoomModal> {

    constructor(private roomService: RoomsService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        RoomModal | Observable<RoomModal> | Promise<RoomModal> {

        const url = route.paramMap.get('roomUrl');

        return this.roomService.getRoomByUrl(url)
    }

}