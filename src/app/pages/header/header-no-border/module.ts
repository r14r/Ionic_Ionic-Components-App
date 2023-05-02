import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderNoBorderComponentRoutingModule } from './routing.module';

import { HeaderNoBorderComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderNoBorderComponentRoutingModule
  ],
  declarations: [HeaderNoBorderComponent]
})
export class HeaderNoBorderComponentModule {}
