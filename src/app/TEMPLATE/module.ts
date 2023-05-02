import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateComponentRoutingModule } from './routing.module';

import { TemplateComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateComponentRoutingModule
  ],
  declarations: [TemplateComponent]
})
export class TemplateComponentModule {}
