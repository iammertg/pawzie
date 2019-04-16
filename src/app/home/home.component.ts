import { Component, OnInit, Input } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() registerForm: RegisterComponent;


  constructor() { }

  ngOnInit() {
  }

}
