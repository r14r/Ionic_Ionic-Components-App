import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherBasicComponentRoutingModule } from './routing.module';

import { RefresherBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresherBasicComponentRoutingModule
  ],
  declarations: [RefresherBasicComponent]
})
export class RefresherBasicComponentModule {}
