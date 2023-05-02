import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaClearOnEditComponentRoutingModule } from './routing.module';

import { TextareaClearOnEditComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaClearOnEditComponentRoutingModule
  ],
  declarations: [TextareaClearOnEditComponent]
})
export class TextareaClearOnEditComponentModule {}
