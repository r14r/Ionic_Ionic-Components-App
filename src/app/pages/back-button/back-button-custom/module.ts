import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackButtonCustomComponentRoutingModule } from './routing.module';

import { BackButtonCustomComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackButtonCustomComponentRoutingModule
  ],
  declarations: [BackButtonCustomComponent]
})
export class BackButtonCustomComponentModule {}
