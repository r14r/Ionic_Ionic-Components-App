import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingThemingComponentRoutingModule } from './routing.module';

import { LoadingThemingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingThemingComponentRoutingModule
  ],
  declarations: [LoadingThemingComponent]
})
export class LoadingThemingComponentModule {}
