import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Platform, NavController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { DetalisProfService } from "../../services/detalis-prof.service";
import { Subscription } from 'rxjs';
import { formularioprof } from "../../interfaces/formularioprof";


@Component({
  selector: 'app-home-prof',
  templateUrl: './home-prof.page.html',
  styleUrls: ['./home-prof.page.scss'],
})
export class HomeProfPage implements OnInit {

  private detalhes = new Array();

  private detalhesSubscription: Subscription;


  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private platform: Platform,
    private autheService: AuthService,
    private detalisService: DetalisProfService) {
      this.detalhesSubscription = this.detalisService.getdetalhes().subscribe(data => {
        this.detalhes = data;
      })
     }

  ngOnInit() {
  }

  ngOnDetroy(){
    this.detalhesSubscription.unsubscribe();
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
