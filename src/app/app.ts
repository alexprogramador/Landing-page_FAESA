import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CourseInfoComponent, RegistrationFormComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'landing-page';
}