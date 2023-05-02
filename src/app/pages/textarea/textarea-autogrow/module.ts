import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaAutogrowComponentRoutingModule } from './routing.module';

import { TextareaAutogrowComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaAutogrowComponentRoutingModule
  ],
  declarations: [TextareaAutogrowComponent]
})
export class TextareaAutogrowComponentModule {}
