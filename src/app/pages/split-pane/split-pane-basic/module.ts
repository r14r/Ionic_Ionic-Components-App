import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplitPaneBasicComponentRoutingModule } from './routing.module';

import { SplitPaneBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplitPaneBasicComponentRoutingModule
  ],
  declarations: [SplitPaneBasicComponent]
})
export class SplitPaneBasicComponentModule {}
