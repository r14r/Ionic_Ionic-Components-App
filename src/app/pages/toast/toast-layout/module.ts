import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastLayoutComponentRoutingModule } from './routing.module';

import { ToastLayoutComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastLayoutComponentRoutingModule
  ],
  declarations: [ToastLayoutComponent]
})
export class ToastLayoutComponentModule {}
