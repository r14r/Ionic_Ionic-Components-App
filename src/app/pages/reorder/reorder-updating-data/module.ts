import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderUpdatingDataComponentRoutingModule } from './routing.module';

import { ReorderUpdatingDataComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderUpdatingDataComponentRoutingModule
  ],
  declarations: [ReorderUpdatingDataComponent]
})
export class ReorderUpdatingDataComponentModule {}
