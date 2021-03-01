import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, Platform, ToastController} from '@ionic/angular'; //Importação feita



@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async pagecliente(){
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('login-cli'); //Rota, a string inserido nas aspas será direcionado.
    aguarde.present(); //Encerrar a tela de load.
  }


  async pageprofissional() { //Tela de load
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    aguarde.present(); //Iniciar a tela de load.
    this.navCtrl.navigateRoot('login-prof'); //Rota, a string inserido nas aspas será direcionado.
    aguarde.present(); //Encerrar a tela de load.
  }

}
