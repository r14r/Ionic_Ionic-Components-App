import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitleBasicComponentRoutingModule } from './routing.module';

import { TitleBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitleBasicComponentRoutingModule
  ],
  declarations: [TitleBasicComponent]
})
export class TitleBasicComponentModule {}
