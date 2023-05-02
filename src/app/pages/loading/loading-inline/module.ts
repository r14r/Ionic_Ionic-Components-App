import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingInlineComponentRoutingModule } from './routing.module';

import { LoadingInlineComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingInlineComponentRoutingModule
  ],
  declarations: [LoadingInlineComponent]
})
export class LoadingInlineComponentModule {}
