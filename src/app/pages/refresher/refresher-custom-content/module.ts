import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherCustomContentComponentRoutingModule } from './routing.module';

import { RefresherCustomContentComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresherCustomContentComponentRoutingModule
  ],
  declarations: [RefresherCustomContentComponent]
})
export class RefresherCustomContentComponentModule {}
