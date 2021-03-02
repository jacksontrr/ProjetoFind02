import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalisProfPage } from './detalis-prof.page';

const routes: Routes = [
  {
    path: '',
    component: DetalisProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalisProfPageRoutingModule {}
