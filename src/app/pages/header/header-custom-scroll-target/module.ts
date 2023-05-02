import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderCustomScrollTargetComponentRoutingModule } from './routing.module';

import { HeaderCustomScrollTargetComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderCustomScrollTargetComponentRoutingModule
  ],
  declarations: [HeaderCustomScrollTargetComponent]
})
export class HeaderCustomScrollTargetComponentModule {}
