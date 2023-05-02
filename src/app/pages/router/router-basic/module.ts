import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouterBasicComponentRoutingModule } from './routing.module';

import { RouterBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterBasicComponentRoutingModule
  ],
  declarations: [RouterBasicComponent]
})
export class RouterBasicComponentModule {}
