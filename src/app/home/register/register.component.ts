import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MustMatch } from '../../validators/mustMatch';
import { AuthService } from '../../services/authService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;
  successMessage: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group(
      {
      username: ['', Validators.required],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
    },
    {
      validators: [MustMatch('email', 'confirmEmail'), MustMatch('password', 'confirmPassword')]
    }
    );

    this.registerForm.valueChanges.subscribe(res => {
      console.log(this.registerForm);
    });
  }

  get _registerForm(): {[key: string]: AbstractControl} {
    return this.registerForm.controls;
  }

  submitable() {
    return this.registerForm.status === 'INVALID' ? false : true;
  }

  // onSubmit() {
  //   if(this.registerForm.valid) {
  //     this.router.navigate(["login"]);
  //   } else {
  //     alert('this form is invalid!')
  //   }
  // }

  // tryRegister(value) {
  //   this.authService.doRegister(value)
  //   .then(res => {
  //     this.router.navigate(['login']);
  //     this.errorMessage = '';
  //     this.successMessage = 'Your account has been created';
  //   }, err => {
  //     console.log(err);
  //     this.errorMessage = err.message;
  //     this.successMessage = '';
  //   });
  // }

}
