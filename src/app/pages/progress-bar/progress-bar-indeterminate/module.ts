import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarIndeterminateComponentRoutingModule } from './routing.module';

import { ProgressBarIndeterminateComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarIndeterminateComponentRoutingModule
  ],
  declarations: [ProgressBarIndeterminateComponent]
})
export class ProgressBarIndeterminateComponentModule {}
