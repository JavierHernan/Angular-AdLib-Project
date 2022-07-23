import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-component-template-driven',
  templateUrl: './reactive-component-template-driven.component.html',
  styleUrls: ['./reactive-component-template-driven.component.css']
})
export class ReactiveComponentTemplateDrivenComponent implements OnInit {

  nameInput = '';
  adjectiveInput = '';
  empty = '-';

  nameInputDisplay = '';
  adjectiveInputDisplay = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit1() {
    this.nameInputDisplay = this.nameInput;
    this.adjectiveInputDisplay = this.adjectiveInput;
  }

}
