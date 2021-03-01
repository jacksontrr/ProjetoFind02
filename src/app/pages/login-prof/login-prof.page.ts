import { Component, OnInit } from '@angular/core';

import {
  LoadingController,
  NavController,
  Platform,
  ToastController,
} from '@ionic/angular'; //Importação feita
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore'; // importação feita
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login-prof',
  templateUrl: './login-prof.page.html',
  styleUrls: ['./login-prof.page.scss'],
})
export class LoginProfPage implements OnInit {
  public user: User = {};
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private platform: Platform,
    private autheService: AuthService
  ) {}

  ngOnInit() {}

async login(){
  let aguarde = await this.loadingCtrl.create({
    message: 'Aguarde por favor...',
    duration: 900,
  });
  try {
    await this.autheService.login(this.user);
    this.navCtrl.navigateRoot('home-prof');
  } catch (error) {
    let massage: string;
      switch (error.code) {
        case 'auth/email-already-in-use':
          massage = 'E-mail sendo usado!';
          break;
        case 'auth/invalid-email':
          massage = 'E-mail Invalido!';
          break;

          case 'auth/argument-error':
          massage = 'Insira um E-mail.';
          break;

      }
      console.error(error);
      this.presentToast(error);
  } finally {
    aguarde.dismiss();
  }
}







  async cadastro() {
    //Tela de load
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('cadastrar-prof'); //Rota, a string inserido nas aspas será direcionado.
    aguarde.present(); //Encerrar a tela de load.
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async inicial() {
    //Tela de load
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('inicial'); //Rota, a string inserido nas aspas será direcionado.
    aguarde.present(); //Encerrar a tela de load.
  }
}
