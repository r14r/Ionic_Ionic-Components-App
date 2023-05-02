import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollCustomInfiniteScrollContentComponentRoutingModule } from './routing.module';

import { InfiniteScrollCustomInfiniteScrollContentComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteScrollCustomInfiniteScrollContentComponentRoutingModule
  ],
  declarations: [InfiniteScrollCustomInfiniteScrollContentComponent]
})
export class InfiniteScrollCustomInfiniteScrollContentComponentModule {}
