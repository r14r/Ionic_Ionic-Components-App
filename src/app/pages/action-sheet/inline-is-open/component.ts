import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet-inline-is-open',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class ActionSheetInlineIsOpenComponent implements OnInit {
  isActionSheetOpen = false;
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

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  constructor() {}

  ngOnInit() {}
}
