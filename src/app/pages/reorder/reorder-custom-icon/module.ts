import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderCustomIconComponentRoutingModule } from './routing.module';

import { ReorderCustomIconComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderCustomIconComponentRoutingModule
  ],
  declarations: [ReorderCustomIconComponent]
})
export class ReorderCustomIconComponentModule {}
