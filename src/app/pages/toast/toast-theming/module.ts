import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastThemingComponentRoutingModule } from './routing.module';

import { ToastThemingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastThemingComponentRoutingModule
  ],
  declarations: [ToastThemingComponent]
})
export class ToastThemingComponentModule {}
