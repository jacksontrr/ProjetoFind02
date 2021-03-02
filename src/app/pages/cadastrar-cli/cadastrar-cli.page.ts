import { Component, OnInit } from '@angular/core';

import { LoadingController, NavController, Platform, ToastController} from '@ionic/angular'; //Importação feita
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; // importação feita
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthcService } from 'src/app/services/authc.service';
import { Userc } from 'src/app/interfaces/userc';


@Component({
  selector: 'app-cadastrar-cli',
  templateUrl: './cadastrar-cli.page.html',
  styleUrls: ['./cadastrar-cli.page.scss'],
})
export class CadastrarCliPage implements OnInit {
  public user: Userc = {};

  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private platform: Platform,
    private autheService: AuthcService) { }

  ngOnInit() {
  }

  async register() {
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });
    aguarde.present();
    try {
      await this.autheService.register(this.user);
      this.navCtrl.navigateRoot('home-cli');
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

  async voltar() { //Tela de load
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('login-cli'); //Rota, a string inserido nas aspas será direcionado.
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
