import {Component} from '@angular/core';
import {NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Component({
    templateUrl : `./app/forms/reactive.tpl.html`,
    styleUrls: [`./app/forms/forms.css`]
})

export class ReactiveFormComponent  {
    form = {};

    submitted = false;

    sizes = ['S', 'M', 'L', 'XL'];

    submit ($event: any) {
        $event.preventDefault();
        this.submitted = true;
    }
}
