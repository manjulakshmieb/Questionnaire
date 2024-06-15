import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ques2PageRoutingModule } from './ques2-routing.module';

import { Ques2Page } from './ques2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ques2PageRoutingModule
  ],
  declarations: [Ques2Page]
})
export class Ques2PageModule {}
