import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentBasicComponentRoutingModule } from './routing.module';

import { ContentBasicComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentBasicComponentRoutingModule
  ],
  declarations: [ContentBasicComponent]
})
export class ContentBasicComponentModule {}
