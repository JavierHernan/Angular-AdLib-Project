import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven-form-builder',
  templateUrl: './reactive-driven-form-builder.component.html',
  styleUrls: ['./reactive-driven-form-builder.component.css']
})
export class ReactiveDrivenFormBuilderComponent implements OnInit {

  // entryForm = new FormGroup ({
  //   nOne : new FormControl(''),
  //   nTwo : new FormControl(''),
  //   entryVerbs : new FormGroup ({
  //     vOne : new FormControl(''),
  //     vTwo : new FormControl(''),
  //   })
  // });

  nOne: any;
  nTwo: any;
  vOne: any;
  vTwo: any;

  entryForm = this.formBuilder.group ({
    nOne : [''],
    nTwo : [''],
    entryVerbs : this.formBuilder.group ({
      vOne : [''],
      vTwo : [''],
    })
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.entryForm.value)
    this.nOne = this.entryForm.controls['nOne'].value;
    this.nTwo = this.entryForm.controls['nTwo'].value;
    this.vOne = this.entryForm.controls['entryVerbs'].value.vOne;
    this.vTwo = this.entryForm.controls['entryVerbs'].value.vTwo;

  }

}
