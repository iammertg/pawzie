import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    constructor(public afAuth: AngularFireAuth){}

    doRegister(value){
        return new Promise<any>((resolve, reject) => {
          firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err))
        })
      }
}
