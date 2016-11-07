import {Component, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl : `./app/forms/reactive.tpl.html`,
    styleUrls: [`./app/forms/forms.css`]
})

export class ReactiveFormComponent implements OnInit {

    public form: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public sizes: Array<String> = ['S', 'M', 'L', 'XL'];

    submit ($event: any) {
        $event.preventDefault();
        this.submitted = true;
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', []),
        });
    }

}
