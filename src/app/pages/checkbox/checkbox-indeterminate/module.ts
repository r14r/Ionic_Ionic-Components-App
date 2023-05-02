import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxIndeterminateComponentRoutingModule } from './routing.module';

import { CheckboxIndeterminateComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxIndeterminateComponentRoutingModule
  ],
  declarations: [CheckboxIndeterminateComponent]
})
export class CheckboxIndeterminateComponentModule {}
