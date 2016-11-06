import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<h1>Angular2 Forms Workshop</h1>
        <nav>
           <a routerLink="/">Home</a> 
           <a routerLink="/template-forms">Template Driven</a>
           <a routerLink="/reactive-forms">Reactive</a>           
        </nav>
        <router-outlet></router-outlet>`
})
export class AppComponent { }
