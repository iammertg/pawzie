import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './services/services.guard';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
   // TO DO
    // canActivate: [AuthGuard]

  },
  {
    path: 'login',
    component: LoginComponent,
    // TO DO
    // canActivate: [AuthGuard] TO DO
  },
  {
    path: 'main-page',
    component: MainPageComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
