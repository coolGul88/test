import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {QuizDataService} from '../quiz/service/quiz.data.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email;

  constructor(private router: Router, private dataService : QuizDataService) {
  }

  ngOnInit() {
  }

  submit(f: NgForm) {
    console.log(this.email);
    this.dataService.email = this.email;
    this.router.navigate(['quiz']);
  }
}
