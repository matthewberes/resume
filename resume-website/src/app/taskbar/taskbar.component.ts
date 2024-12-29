import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css'
})
export class TaskbarComponent implements OnInit {
  constructor(private router: Router) { }

  path: string = "";

  ngOnInit(): void {
    if (window.location.hash == "") {
      this.path = "#/home";
    } else {
      this.path = window.location.hash;
    }
  }

  onClick(val: string) {
    this.path = "#/" + val;
    this.router.navigate(['/' + val]);
  }
}
