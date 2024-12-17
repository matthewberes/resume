import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css'
})
export class TaskbarComponent implements OnInit {
  path: string = "";
  ngOnInit(): void {
    this.path = window.location.pathname;
  }

  onClick(val: string) {
    window.open("/" + val)
  }
}
