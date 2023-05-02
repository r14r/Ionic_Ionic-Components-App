import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastInlineBasicComponentRoutingModule } from './routing.module';

import { ToastInlineBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastInlineBasicComponentRoutingModule
  ],
  declarations: [ToastInlineBasicComponent]
})
export class ToastInlineBasicComponentModule {}
