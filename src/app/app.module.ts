import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/functions';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { VideoBackgroundComponent } from './shared/components/video-background/video-background.component';
import { BookingTileComponent } from './shared/components/booking-tile/booking-tile.component';
import { BlockReservationComponent } from './shared/components/block-reservation/block-reservation.component';
import { BlockScheduleComponent } from './shared/components/block-schedule/block-schedule.component';
import { BookButtonComponent } from './shared/components/book-button/book-button.component';
import { WelcomeStoryComponent } from './shared/components/welcome-story/welcome-story.component';
import { SocialMediaBlockComponent } from './shared/components/social-media-block/social-media-block.component';
import { CarouselCellsComponent } from './shared/components/carousel-cells/carousel-cells.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CreateComponent } from './features/booking/components/create/create.component';
import { AdminToolBarComponent } from './shared/components/admin-tool-bar/admin-tool-bar.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AddRoomComponent } from './rooms/components/add/add.component';
import { EditComponent } from './rooms/components/edit/edit.component';
import { ViewComponent } from './rooms/components/view/view.component';
import { ManageButtonComponent } from './shared/components/manage-button/manage-button.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { UserService } from './shared/services/user.service';
import { ReadMoreLinkComponent } from './shared/read-more-link/read-more-link.component';
import { RoomBookingComponent } from './rooms/components/room-booking/room-booking.component';
import { MatSliderModule } from '@angular/material/slider';
import { ButtonHomeComponent } from './shared/components/btn/button-home/button-home.component';
import { CustomerComponent } from './features/customer/customer.component';
import { AddCustomerComponent } from './features/customer/components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    VideoBackgroundComponent,
    BookingTileComponent,
    BlockReservationComponent,
    BlockScheduleComponent,
    BookButtonComponent,
    WelcomeStoryComponent,
    SocialMediaBlockComponent,
    CarouselCellsComponent,
    FooterComponent,
    LoginComponent,
    CreateComponent,
    AdminToolBarComponent,

    // Rooms
    RoomsComponent,
    AddRoomComponent,
    EditComponent,
    ViewComponent,
    ManageButtonComponent,
    ReadMoreLinkComponent,
    RoomBookingComponent,
    ButtonHomeComponent,
    

    // Customer
    CustomerComponent,
    AddCustomerComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule
  ],
  providers: [
    { provide: USE_AUTH_EMULATOR, useValue: environment.useEmulators ? ['localhost', 9099] : undefined },
    { provide: USE_FIRESTORE_EMULATOR, useValue: environment.useEmulators ? ['localhost', 8181] : undefined },
    { provide: USE_FUNCTIONS_EMULATOR, useValue: environment.useEmulators ? ['localhost', 5001] : undefined },
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
