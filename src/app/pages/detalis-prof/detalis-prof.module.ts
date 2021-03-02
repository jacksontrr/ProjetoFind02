import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalisProfPageRoutingModule } from './detalis-prof-routing.module';

import { DetalisProfPage } from './detalis-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalisProfPageRoutingModule
  ],
  declarations: [DetalisProfPage]
})
export class DetalisProfPageModule {}
