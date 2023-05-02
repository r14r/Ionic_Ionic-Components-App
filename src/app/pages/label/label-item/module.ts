import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelItemComponentRoutingModule } from './routing.module';

import { LabelItemComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelItemComponentRoutingModule
  ],
  declarations: [LabelItemComponent]
})
export class LabelItemComponentModule {}
