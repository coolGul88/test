import { Injectable } from '@angular/core';
import {Survey} from './survey';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SurveyService {
  surveys: string[] = [];
  private surveyUrl = 'http://localhost:8080/survey';
  constructor(private http: HttpClient) { }

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.surveyUrl);
  }
}
