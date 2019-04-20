import { Component } from '@angular/core';
import { AuthService } from './services/authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pawzie';
  constructor(private authService: AuthService) {

  }
}
