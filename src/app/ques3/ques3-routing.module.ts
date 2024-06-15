import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ques3Page } from './ques3.page';

const routes: Routes = [
  {
    path: '',
    component: Ques3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ques3PageRoutingModule {}
