import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicBase1 } from '../dynamic-form-base1';
import { DynamicBase1ControlService } from '../dynamic-form1-control.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DynamicService } from '../dynamic-form1.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  //@Input() questions123: DynamicBase1<string>[] | null = [];
  // questions$: Observable<DynamicBase1<any>[]>;
  questions$!: Observable<DynamicBase1<any>[]>;
  questions123: DynamicBase1<string>[] | null = [];

  form!: FormGroup;
  payLoad = '';
  firstNoun:any;
  secondNoun:any;
  thirdNoun:any;
  firstVerb:any;
  secondVerb:any;

  // private route: ActivatedRoute
  constructor(private qcs: DynamicBase1ControlService, service: DynamicService) { 
    // this.questions = this.router.getCurrentNavigation()
    this.questions$ = service.getQuestions();
    this.questions$.subscribe((result) => {
      this.questions123 = result;
    });

  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions123 as DynamicBase1<string>[])
    // service.getQuestions().subscribe((res) => { this.form = this.qcs.toFormGroup(private qcs: DynamicBase1<string>)})
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log(this.form)
    console.log(this.form.value.firstNoun)
    this.firstNoun = this.form.value.firstNoun
    this.secondNoun = this.form.value.secondNoun
    this.thirdNoun = this.form.value.thirdNoun
    this.firstVerb = this.form.value.firstVerb
    this.secondVerb = this.form.value.secondVerb
    console.log(this.firstNoun)
  }
}
