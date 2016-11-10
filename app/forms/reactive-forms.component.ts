import {Component, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function isEmpty(c: AbstractControl) {
    if (c.get('username').value === c.get('email').value) {
        return {equal_username: 'username should not equal email'};
    }
    return null;
}

@Component({
    templateUrl : `./app/forms/reactive.tpl.html`,
    styleUrls: [`./app/forms/forms.css`]
})

export class ReactiveFormComponent implements OnInit {

    public form: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public sizes: Array<String> = ['S', 'M', 'L', 'XL'];

    constructor(public _fb: FormBuilder) {
      this.form = this._fb.group({
        username: [''],
        email: ['', Validators.required],
        sizes: '',
        addresses: this._fb.array([
            this._fb.group({
                street: ['123 fake st', Validators.required],
                postcode: ['84371']
            }),
            this._fb.group({
                street: ['123 fake st', Validators.required],
                postcode: ['84371']
            })
        ])
      }, {validator: isEmpty});
      this.form.patchValue({
          username: 'David'
      });
    }

    submit ($event: any) {
        $event.preventDefault();
        if (this.form.errors !== null) {
            return;
        }
        this.submitted = true;
    }

    addAddress() {
        const control = <FormArray>this.form.controls['addresses'];
        control.push(this._fb.group({
                street: ['', Validators.required],
                postcode: ['84371']
            }));
    }


    ngOnInit() {
        // this.form = new FormGroup({
        //     name: new FormControl('', []),
        // });
    }

}
