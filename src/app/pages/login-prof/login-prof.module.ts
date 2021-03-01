import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginProfPageRoutingModule } from './login-prof-routing.module';

import { LoginProfPage } from './login-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginProfPageRoutingModule
  ],
  declarations: [LoginProfPage]
})
export class LoginProfPageModule {}
