import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DynamicBase1 } from './dynamic-form-base1';
import { DynamicService } from './dynamic-form1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ad-libs';
  //questions$: Observable<DynamicBase1<any>[]>;

  // service: DynamicService, private router: Router
  constructor(service: DynamicService) {
    //this.questions$ = service.getQuestions();
    //service.arrQuestions = service.getQuestions();
  }
  
  // navigate() {
  //   this.router.navigate(['app-dynamic-form'])
  // }
  
}
