import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastIconComponentRoutingModule } from './routing.module';

import { ToastIconComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastIconComponentRoutingModule
  ],
  declarations: [ToastIconComponent]
})
export class ToastIconComponentModule {}
