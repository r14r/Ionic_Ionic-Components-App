import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet-theming-css-properties',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ActionSheetThemingCssPropertiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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
}
