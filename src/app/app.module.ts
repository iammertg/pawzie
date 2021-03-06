import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SloganComponent } from './home/slogan/slogan.component';
import { AuthService } from './services/authService';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';
import {SwipeCardLibModule} from 'ng-swipe-card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MainPageComponent,
    SloganComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    SwipeCardLibModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
