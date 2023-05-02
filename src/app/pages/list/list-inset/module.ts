import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListInsetComponentRoutingModule } from './routing.module';

import { ListInsetComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListInsetComponentRoutingModule
  ],
  declarations: [ListInsetComponent]
})
export class ListInsetComponentModule {}
