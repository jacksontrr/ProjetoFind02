import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalisCliPage } from './detalis-cli.page';

const routes: Routes = [
  {
    path: '',
    component: DetalisCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalisCliPageRoutingModule {}
