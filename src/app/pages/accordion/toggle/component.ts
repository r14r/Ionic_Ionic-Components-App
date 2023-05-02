import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-accordion-toggle',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class AccordionToggleComponent  implements OnInit {

  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup | undefined;

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl!.value === 'second') {
      nativeEl!.value = undefined;
    } else {
      nativeEl!.value = 'second';
    }
  };

  constructor() { }

  ngOnInit() {}

}
