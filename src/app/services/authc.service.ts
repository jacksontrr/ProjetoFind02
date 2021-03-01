import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Userc } from '../interfaces/userc';

@Injectable({
  providedIn: 'root'
})
export class AuthcService {

  constructor(private afa: AngularFireAuth) { }


  login(user: Userc){
    return this.afa.signInWithEmailAndPassword(user.email, user.senha)
  }

  register(user: Userc){

    return this.afa.createUserWithEmailAndPassword(user.email, user.senha)
  }

  logout(user: Userc){

  }

  getaAuth(){
  return this.afa;
  }
}
