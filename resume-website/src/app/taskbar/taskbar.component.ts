import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        if (ev.url == "/") {
          this.path = "#/home";
        } else {
          this.path = "#" + ev.url
        }
      });
  }

  onClick(val: string) {
    this.router.navigate(['/' + val]);
  }
}
