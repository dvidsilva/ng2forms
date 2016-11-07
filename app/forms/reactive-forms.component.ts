import {Component} from '@angular/core';

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
