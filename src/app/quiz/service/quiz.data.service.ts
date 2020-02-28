import {Injectable} from '@angular/core';
import {Survey} from '../../survey/survey';

@Injectable()
export class QuizDataService {
  email: string;
  survey: Survey;
  answers: string[] = [];
}
