import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarProfPageRoutingModule } from './cadastrar-prof-routing.module';

import { CadastrarProfPage } from './cadastrar-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarProfPageRoutingModule
  ],
  declarations: [CadastrarProfPage]
})
export class CadastrarProfPageModule {}
