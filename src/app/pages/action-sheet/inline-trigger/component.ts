import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet-inline-trigger',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ActionSheetInlineTriggerComponent  implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete'
      }
    },
    {
      text: 'Share',
      data: {
        action: 'share'
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel'
      }
    }
  ];
  
  constructor() { }

  ngOnInit() {}

}
