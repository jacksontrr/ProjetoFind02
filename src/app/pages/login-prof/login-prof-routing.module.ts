import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginProfPage } from './login-prof.page';

const routes: Routes = [
  {
    path: '',
    component: LoginProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginProfPageRoutingModule {}
