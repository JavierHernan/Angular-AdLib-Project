import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DynamicBase1} from './dynamic-form-base1';

@Injectable()
export class DynamicBase1ControlService {
  constructor() { }

  toFormGroup(inputsText: DynamicBase1<string>[] ) {
    const group: any = {};
    console.log("When does this work")

    inputsText.forEach(input => {
      group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
                                              : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }
}