import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabListSideComponentRoutingModule } from './routing.module';

import { FabListSideComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabListSideComponentRoutingModule
  ],
  declarations: [FabListSideComponent]
})
export class FabListSideComponentModule {}
