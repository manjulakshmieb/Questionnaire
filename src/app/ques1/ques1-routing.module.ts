import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ques1Page } from './ques1.page';

const routes: Routes = [
  {
    path: '',
    component: Ques1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ques1PageRoutingModule {}
