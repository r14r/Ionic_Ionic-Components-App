import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderFadeComponentRoutingModule } from './routing.module';

import { HeaderFadeComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderFadeComponentRoutingModule
  ],
  declarations: [HeaderFadeComponent]
})
export class HeaderFadeComponentModule {}
