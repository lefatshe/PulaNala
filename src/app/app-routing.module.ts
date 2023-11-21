import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

import { RoomResolver } from './shared/resolvers/rooms.resolve';

import { AddCustomerComponent } from './features/customer/components/add/add.component';
import { CustomerResolver } from './shared/resolvers/customer.resolve';
import { ViewCustomerComponent } from './features/customer/components/view/view.component';
import {AddRoomComponent} from './features/rooms/components/add/add.component';
import {ViewComponent} from './features/rooms/components/view/view.component';
import {RoomsComponent} from './features/rooms/rooms.component';
import {RoomBookingComponent} from './features/rooms/components/room-booking/room-booking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'add-room',
    component: AddRoomComponent
  },
  {
    path: 'manage-room',
    component: ViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: AddCustomerComponent
  },
  {
    path: 'rooms/:roomUrl',
    component: RoomsComponent,
    resolve: {
      details: RoomResolver
    }
  },
  {
    path: 'booking/:roomUrl',
    component: RoomBookingComponent,
    resolve: {
      details: RoomResolver
    }
  },
  {
    path: 'info/:customerId',
    component: ViewCustomerComponent,
    resolve: {
      details: CustomerResolver
    }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
