import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet-role-info-on-dismiss',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ActionSheetRoleInfoOnDismissComponent implements OnInit {
  result = "";
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() {}

  setResult(ev:any) {
    this.result = JSON.stringify(ev.detail, null, 2);
  }

  ngOnInit() {}
}
