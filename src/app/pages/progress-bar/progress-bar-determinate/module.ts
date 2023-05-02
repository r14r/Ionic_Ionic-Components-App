import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarDeterminateComponentRoutingModule } from './routing.module';

import { ProgressBarDeterminateComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarDeterminateComponentRoutingModule
  ],
  declarations: [ProgressBarDeterminateComponent]
})
export class ProgressBarDeterminateComponentModule {}
