import {Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators} from '@angular/forms';

@Component({
    selector: 'increase-input',
    template: `<div>
        <button md-button (click)="increase()"> {{counter}} </button>
     </div>`,
    providers: [
           {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: IncreaseInput}
    ]
})

export class IncreaseInput implements ControlValueAccessor {
    counter: number = 0;
    _onChange: (value: any) => void;

    writeValue(value: any) {
           this.counter += 1;
   }
  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {}

    increase() {
        this.counter += 1;
        this._onChange(this.counter);
    }
}
