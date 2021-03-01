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
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-cadastrar-prof',
  templateUrl: './cadastrar-prof.page.html',
  styleUrls: ['./cadastrar-prof.page.scss'],
})
export class CadastrarProfPage implements OnInit {
  public user: User = {};

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private platform: Platform,
    private autheService: AuthService
  ) {}

  ngOnInit() {}

  async register() {
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });
    aguarde.present();
    try {
      await this.autheService.register(this.user);
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
      }
      console.error(error);

      this.presentToast(error);
    } finally {
      aguarde.dismiss();
    }
  }

  async voltar() {
    //Tela de load
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('login-prof'); //Rota, a string inserido nas aspas será direcionado.
    aguarde.present(); //Encerrar a tela de load.
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
}
