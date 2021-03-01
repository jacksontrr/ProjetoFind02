import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarProfPage } from './cadastrar-prof.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarProfPageRoutingModule {}
