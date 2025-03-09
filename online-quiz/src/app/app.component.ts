import { Component } from '@angular/core';

import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  imports: [QuizComponent],
  standalone: true,
  template:'<app-quiz></app-quiz>',
  
})
export class AppComponent {
  title = 'online-quiz';
}
