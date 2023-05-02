import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingSpinnersComponentRoutingModule } from './routing.module';

import { LoadingSpinnersComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingSpinnersComponentRoutingModule
  ],
  declarations: [LoadingSpinnersComponent]
})
export class LoadingSpinnersComponentModule {}
