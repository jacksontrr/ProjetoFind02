import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarCliPageRoutingModule } from './cadastrar-cli-routing.module';

import { CadastrarCliPage } from './cadastrar-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarCliPageRoutingModule
  ],
  declarations: [CadastrarCliPage]
})
export class CadastrarCliPageModule {}
