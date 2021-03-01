import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, Platform, ToastController} from '@ionic/angular'; //Importação feita
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; // importação feita
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthcService } from 'src/app/services/authc.service';
import { Userc } from 'src/app/interfaces/userc';

@Component({
  selector: 'app-login-cli',
  templateUrl: './login-cli.page.html',
  styleUrls: ['./login-cli.page.scss'],
})
export class LoginCliPage implements OnInit {
  public user: Userc = {};
  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private platform: Platform,
    private autheService: AuthcService) { }

  ngOnInit() {
  }



  async login(){
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });
    try {
      await this.autheService.login(this.user);
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

  showToast(mensagem: string) {
    this.toastCtrl
      .create({
        message: mensagem,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
  async cadastro() { //Tela de load
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('cadastrar-cli'); //Rota, a string inserido nas aspas será direcionado.
    aguarde.present(); //Encerrar a tela de load.
  }

  async inicial() { //Tela de load
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('inicial'); //Rota, a string inserido nas aspas será direcionado.
    aguarde.present(); //Encerrar a tela de load.
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

}
