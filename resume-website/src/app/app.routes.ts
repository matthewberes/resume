import { Routes } from '@angular/router';
import { DegreeComponent } from './degree/degree.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'degree', component: DegreeComponent }
];
