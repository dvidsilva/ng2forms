import { Component } from '@angular/core';


@Component({
    template: `<section>
        <h2>{{welcome_message}}</h2>
        <p>Workshop prepared for <a href="https://qconsf.com/sf2016/workshop/angular-2-forms-workshop" target="_blank">QConSF</a></p>
        <p>Find the repo for this code in <a href="https://github.com/dvidsilva/ng2forms">GitHub</a></p>
        <p>A live version of this project maybe is found in 
            <a href="https://dvidsilva.github.io/ng2forms">dvidsilva.github.io/ng2forms</a></p>
        <p><button (click)="showAlert()">Click here to see an alert</button></p>
        <p><strong>This is a two way data binding with ngModel:</strong>
        <input [(ngModel)]="welcome_message" ></p>
    </section>`,
    styles: [`
    input {
        font-size: 2em;
        padding: 4px;
        display: block;
     }
    `]
})
export class HomeComponent { 
  welcome_message = 'Welcome to NG2Forms Workshop';

  showAlert() {
    alert(this.welcome_message);
  }
}
