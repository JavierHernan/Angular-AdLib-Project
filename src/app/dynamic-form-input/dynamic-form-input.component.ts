import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicBase1 } from '../dynamic-form-base1';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent implements OnInit {

  @Input() question!: DynamicBase1<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
