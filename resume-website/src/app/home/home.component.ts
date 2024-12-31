import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) { }
  mobile: boolean = false;

  ngOnInit(): void {
    if (window.screen.width < 621) { // 768px portrait
      this.mobile = true;
      this.cdr.detectChanges();
    }
  }

  openDialog(value: string) {
    this.dialog.open(DialogComponent, { data: { item: value } })
  }


}
