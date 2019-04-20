import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { auth } from 'firebase/app';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
  user$: Observable<any>;
    constructor(
      public afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
      ) {
        this.user$ = this.afAuth.authState.pipe(
          switchMap(user => {
            if (user) {
              return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
            } else {
              return of(null);
            }
          })
        );
      }
      async googleSignin() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
      }

      async signOut() {
        await this.afAuth.auth.signOut();
        return this.router.navigate(['login']);
      }

      private updateUserData(user) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        };

        return userRef.set(data, { merge: true });

      }

    doRegister(value) {
        return new Promise<any>((resolve, reject) => {
          firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            resolve(res);
          }, err => reject(err));
        });
      }

}

