import { Component } from '@angular/core';

import { CourseComponent } from './components/course/course.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseComponent],
  template: '<app-course></app-course>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lms-app';
}
