import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentHeaderFooterComponentRoutingModule } from './routing.module';

import { ContentHeaderFooterComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentHeaderFooterComponentRoutingModule
  ],
  declarations: [ContentHeaderFooterComponent]
})
export class ContentHeaderFooterComponentModule {}
