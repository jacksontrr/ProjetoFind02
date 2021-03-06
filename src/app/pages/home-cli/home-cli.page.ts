import { Component, OnInit } from '@angular/core';
import { AuthcService } from 'src/app/services/authc.service';
import { Platform, NavController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-cli',
  templateUrl: './home-cli.page.html',
  styleUrls: ['./home-cli.page.scss'],
})
export class HomeCliPage implements OnInit {


  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private platform: Platform,
    private autheService: AuthcService) { }

  ngOnInit() {
  }



    async logout() {
    let aguarde = await this.loadingCtrl.create({
      message: 'Aguarde por favor...',
      duration: 900,
    });

    try {
      await this.autheService.logout();
    } catch (error) {
      console.error(error);
    } finally {
      aguarde.dismiss();
    }
  }
}
