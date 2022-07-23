import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-comp-reactive-driven',
  templateUrl: './reactive-comp-reactive-driven.component.html',
  styleUrls: ['./reactive-comp-reactive-driven.component.css']
})
export class ReactiveCompReactiveDrivenComponent implements OnInit {

  nounForm = new FormGroup({
    nounOne: new FormControl(''),
    verbOne: new FormControl(''),
    nounTwo: new FormControl(''),
  })

  noun1: any;
  noun2: any;
  verb1: any;

  updateAdLib() {
    // this.noun.setValue('');
    console.log(this.nounForm.controls['nounOne'].value)
    console.log(this.nounForm.controls['verbOne'].value)
    console.log(this.nounForm.controls['nounTwo'].value)

  this.noun1 = this.nounForm.controls['nounOne'].value;
  this.noun2 = this.nounForm.controls['nounTwo'].value;
  this.verb1 = this.nounForm.controls['verbOne'].value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
