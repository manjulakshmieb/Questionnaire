import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ques1',loadChildren: () => import('./ques1/ques1.module').then( m => m.Ques1PageModule)
  },
  {
    path: '',
    redirectTo: 'ques1',
    pathMatch: 'full'
  },
  {
    path: 'ques2',
    loadChildren: () => import('./ques2/ques2.module').then( m => m.Ques2PageModule)
  },
  {
    path: 'ques3',
    loadChildren: () => import('./ques3/ques3.module').then( m => m.Ques3PageModule)
  },
  {
    path: 'submit',
    loadChildren: () => import('./submit/submit.module').then( m => m.SubmitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
