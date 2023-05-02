import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderCustomScrollTargetComponentRoutingModule } from './routing.module';

import { ReorderCustomScrollTargetComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderCustomScrollTargetComponentRoutingModule
  ],
  declarations: [ReorderCustomScrollTargetComponent]
})
export class ReorderCustomScrollTargetComponentModule {}
