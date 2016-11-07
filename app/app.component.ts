import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators } from '@angular/forms';


@Component({
    selector: 'my-app',
    template: `<h1>Angular2 Forms Workshop</h1>
        <nav>
           <a  md-raised-button routerLink="/">Home</a> 
           <a  md-raised-button routerLink="/template-forms">Template Driven</a>
           <a  md-raised-button routerLink="/reactive-forms">Reactive</a>           
        </nav>
        <router-outlet></router-outlet>`
})
export class AppComponent { }
