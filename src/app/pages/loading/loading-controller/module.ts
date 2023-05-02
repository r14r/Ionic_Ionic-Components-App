import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingControllerComponentRoutingModule } from './routing.module';

import { LoadingControllerComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingControllerComponentRoutingModule
  ],
  declarations: [LoadingControllerComponent]
})
export class LoadingControllerComponentModule {}
