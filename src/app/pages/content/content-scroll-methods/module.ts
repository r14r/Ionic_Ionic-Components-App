import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentScrollMethodsComponentRoutingModule } from './routing.module';

import { ContentScrollMethodsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentScrollMethodsComponentRoutingModule
  ],
  declarations: [ContentScrollMethodsComponent]
})
export class ContentScrollMethodsComponentModule {}
