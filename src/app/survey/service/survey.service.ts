import {Injectable} from '@angular/core';
import {Survey} from '../survey';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {QuizDataService} from '../../quiz/service/quiz.data.service';

@Injectable()
export class SurveyService {
  private surveyUrl = 'http://localhost:8080/survey';
  private surveySaveUrl = 'http://localhost:8080/survey';

  constructor(private http: HttpClient, private dataService: QuizDataService) {
  }

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.surveyUrl);
  }

  saveSurvey() {
    this.http.post<any>(this.surveySaveUrl, {
      'answers': this.dataService.answers,
      'survey': this.dataService.survey.id,
      'email': this.dataService.email
    }).subscribe();
  }
}
