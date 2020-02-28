import { Component } from '@angular/core';
import {SurveyService} from './survey.service';
import {Survey} from './survey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  surveys: Survey[];

  ngOnInit() {
    this.getSurveys();
  }

  constructor(private surveyService: SurveyService) {
  }

  getSurveys() {
    this.surveyService.getSurveys().subscribe(data => {
      console.log(data);
      this.surveys = data;
    });
  }
}
