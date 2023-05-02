import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderWrapperComponentRoutingModule } from './routing.module';

import { ReorderWrapperComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderWrapperComponentRoutingModule
  ],
  declarations: [ReorderWrapperComponent]
})
export class ReorderWrapperComponentModule {}
