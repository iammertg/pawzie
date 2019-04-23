import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ForgotPasswordComponent } from './auth/login/forgot-password/forgot-password.component';
import { AuthGuard } from './services/services.guard';
import { SecureInnerPagesGuard } from './services/secure-inner-pages.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'main-page',
    component: MainPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
