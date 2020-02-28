import {Component, OnInit} from '@angular/core';
import {QuizDataService} from './service/quiz.data.service';
import {Router} from '@angular/router';
import {SurveyService} from '../survey/service/survey.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  question: string;
  questionIndex = 1;
  answer: string;
  minutes = 0;
  seconds = 0;
  private id;

  constructor(private dataService: QuizDataService, private router: Router, private surveyService: SurveyService) {
  }

  ngOnInit() {
    this.id = setInterval(() => {
      this.seconds++;
      if (this.minutes === 3) {
        this.nextQuestion();
      }
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.id);
  }

  nextQuestion() {
    this.seconds = 0;
    this.minutes = 0;
    if (this.questionIndex === 5) {
      clearInterval(this.id);
      this.surveyService.saveSurvey();
      this.router.navigate(['thankYou']);
    } else {
      this.questionIndex++;
      this.dataService.answers.push(this.answer);
      this.answer = '';
    }
  }


}
