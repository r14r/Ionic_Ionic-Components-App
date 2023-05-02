import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextareaHelperErrorComponentRoutingModule } from './routing.module';

import { TextareaHelperErrorComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextareaHelperErrorComponentRoutingModule
  ],
  declarations: [TextareaHelperErrorComponent]
})
export class TextareaHelperErrorComponentModule {}
