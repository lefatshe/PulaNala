import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoomComponent } from './rooms/components/add/add.component';
import { ViewComponent } from './rooms/components/view/view.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

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
