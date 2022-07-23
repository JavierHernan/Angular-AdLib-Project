import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-component',
  templateUrl: './reactive-component.component.html',
  styleUrls: ['./reactive-component.component.css']
})
export class ReactiveComponentComponent implements OnInit {

  valueName = '';
  valueAdjective = '';
  empty = '-';

  reactiveControl = new FormControl('')
  anotherReactiveControl = new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.valueName = this.reactiveControl.value
    this.valueAdjective = this.anotherReactiveControl.value;
  }

}
