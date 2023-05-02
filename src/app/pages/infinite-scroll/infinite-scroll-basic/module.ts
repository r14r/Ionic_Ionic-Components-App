import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollBasicComponentRoutingModule } from './routing.module';

import { InfiniteScrollBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteScrollBasicComponentRoutingModule
  ],
  declarations: [InfiniteScrollBasicComponent]
})
export class InfiniteScrollBasicComponentModule {}
