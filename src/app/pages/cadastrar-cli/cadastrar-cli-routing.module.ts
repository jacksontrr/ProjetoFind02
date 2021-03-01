import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarCliPage } from './cadastrar-cli.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarCliPageRoutingModule {}
