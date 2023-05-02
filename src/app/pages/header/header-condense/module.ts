import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderCondenseComponentRoutingModule } from './routing.module';

import { HeaderCondenseComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderCondenseComponentRoutingModule
  ],
  declarations: [HeaderCondenseComponent]
})
export class HeaderCondenseComponentModule {}
