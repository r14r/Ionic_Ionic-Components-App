import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollInfiniteScrollContentComponentRoutingModule } from './routing.module';

import { InfiniteScrollInfiniteScrollContentComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteScrollInfiniteScrollContentComponentRoutingModule
  ],
  declarations: [InfiniteScrollInfiniteScrollContentComponent]
})
export class InfiniteScrollInfiniteScrollContentComponentModule {}
