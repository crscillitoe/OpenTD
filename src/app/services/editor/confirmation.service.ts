import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/editor/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor(public dialog: MatDialog) {}

  /**
   * Opens a confirmation dialog, runs the given function
   * if confirmation is successful.
   *
   * @param f Function to run on confirmation
   */
  confirm(title: string, f: () => void): void {
    this.dialog
      .open(DialogComponent, {
        data: {
          title: title,
        },
      })
      .afterClosed()
      .subscribe((result: boolean) => {
        if (result) {
          f();
        }
      });
  }
}
