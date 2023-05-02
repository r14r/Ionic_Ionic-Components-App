import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentScrollEventsComponentRoutingModule } from './routing.module';

import { ContentScrollEventsComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentScrollEventsComponentRoutingModule
  ],
  declarations: [ContentScrollEventsComponent]
})
export class ContentScrollEventsComponentModule {}
