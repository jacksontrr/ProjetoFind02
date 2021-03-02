import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalisCliPageRoutingModule } from './detalis-cli-routing.module';

import { DetalisCliPage } from './detalis-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalisCliPageRoutingModule
  ],
  declarations: [DetalisCliPage]
})
export class DetalisCliPageModule {}
