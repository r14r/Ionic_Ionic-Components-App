import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBasicComponentRoutingModule } from './routing.module';

import { ListBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBasicComponentRoutingModule
  ],
  declarations: [ListBasicComponent]
})
export class ListBasicComponentModule {}
