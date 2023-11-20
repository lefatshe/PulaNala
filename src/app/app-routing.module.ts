import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoomComponent } from './rooms/components/add/add.component';
import { ViewComponent } from './rooms/components/view/view.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomResolver } from './shared/resolvers/rooms.resolve';
import { RoomBookingComponent } from './rooms/components/room-booking/room-booking.component';
import { AddCustomerComponent } from './customer/components/add/add.component';
import { CustomerResolver } from './shared/resolvers/customer.resolve';
import { ViewCustomerComponent } from './customer/components/view/view.component';

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
