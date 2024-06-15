import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ques2Page } from './ques2.page';

const routes: Routes = [
  {
    path: '',
    component: Ques2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ques2PageRoutingModule {}
