import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherCustomScrollTargetComponentRoutingModule } from './routing.module';

import { RefresherCustomScrollTargetComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresherCustomScrollTargetComponentRoutingModule
  ],
  declarations: [RefresherCustomScrollTargetComponent]
})
export class RefresherCustomScrollTargetComponentModule {}
