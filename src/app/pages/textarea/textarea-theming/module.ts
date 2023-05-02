import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaThemingComponentRoutingModule } from './routing.module';

import { TextareaThemingComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaThemingComponentRoutingModule
  ],
  declarations: [TextareaThemingComponent]
})
export class TextareaThemingComponentModule {}
