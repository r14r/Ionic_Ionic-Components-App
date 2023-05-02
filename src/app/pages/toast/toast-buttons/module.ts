import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastButtonsComponentRoutingModule } from './routing.module';

import { ToastButtonsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastButtonsComponentRoutingModule
  ],
  declarations: [ToastButtonsComponent]
})
export class ToastButtonsComponentModule {}
