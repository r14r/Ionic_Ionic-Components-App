import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion-listen-changes',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class AccordionListenChangesComponent implements OnInit {
  @ViewChild('listenerOut', { static: true }) listenerOut: ElementRef | undefined;
  private values: string[] = ['first', 'second', 'third'];


  constructor() { }

  ngOnInit() { }


  accordionGroupChange = (ev: any) => {
    const nativeEl = this.listenerOut!.nativeElement;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  };
}
