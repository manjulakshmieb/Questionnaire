import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ques3PageRoutingModule } from './ques3-routing.module';

import { Ques3Page } from './ques3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ques3PageRoutingModule
  ],
  declarations: [Ques3Page]
})
export class Ques3PageModule {}
