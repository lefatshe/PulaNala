import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'create-course',
  //   component: CreateCourseComponent

  // },
  // {
  //   path: 'create-user',
  //   component: CreateUserComponent

  // },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'courses/:courseUrl',
  //   component: CourseComponent,
  //   resolve: {
  //     course: CourseResolver
  //   }
  // },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
