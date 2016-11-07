import { Component, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Component({
    templateUrl: './app/forms/template-driven.tpl.html',
    styleUrls: [`./app/forms/forms.css`]
 })

export class TemplateFormComponent  {
    submitted = false;

    sizes = ['S', 'M', 'L', 'XL'];

    form = {};

    submit ($event: any) {
        $event.preventDefault();
        this.submitted = true;
    }
}
