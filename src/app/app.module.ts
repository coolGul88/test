import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SurveyService} from './survey/service/survey.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { SurveyComponent } from './survey/survey.component';
import { EmailComponent } from './email/email.component';
import {FormsModule} from '@angular/forms';
import {QuizDataService} from './quiz/service/quiz.data.service';
import { ThankYouComponent } from './thank-you/thank-you.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    SurveyComponent,
    EmailComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SurveyService, QuizDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
