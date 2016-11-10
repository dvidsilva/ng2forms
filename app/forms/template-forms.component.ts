import { Component, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

function emailDiffToUsername(c: AbstractControl) {
    if (!c.get('username') || !c.get('email')) {
        return null;
    }
    if (c.get('username').value === c.get('email').value) {
        return {'equal_username' : 'your email and username should be diff'};
    }
    return null;
}
@Directive({
    selector: '[email-username-matcher]',
    providers: [
        {provide: NG_VALIDATORS, multi: true, useValue: emailDiffToUsername}
    ]
})
export class EmailDiffToUsername {
}

@Component({
    templateUrl: './app/forms/template-driven.tpl.html',
    styleUrls: [`./app/forms/forms.css`]
 })

export class TemplateFormComponent  {
    submitted = false;

    username = 'david';
    email = 'david';

    sizes = ['S', 'M', 'L', 'XL'];

    form = {};

    submit (f: any) {
        console.log(f);
        this.submitted = true;
    }
}
