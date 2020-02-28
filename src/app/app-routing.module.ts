import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {SurveyComponent} from './survey/survey.component';
import {EmailComponent} from './email/email.component';
import {ThankYouComponent} from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: SurveyComponent },
  { path: 'email', component: EmailComponent },
  { path: 'quiz', component: QuizComponent},
  { path: 'thankYou', component: ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
