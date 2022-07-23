import { DynamicBase1 } from './dynamic-form-base1';

export class DynamicBase1Textbox extends DynamicBase1<string> {
  override controlType = 'textbox';
}