import { Component, NgZone } from '@angular/core';
import { AuthService } from './services/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pawzie';
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone) {

  }
}
