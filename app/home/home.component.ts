import { Component } from '@angular/core';


@Component({
    template: `<section>
        <md-card>
            <md-card-title>{{welcome_message}}</md-card-title>
        <p>Workshop prepared for <a href="https://qconsf.com/sf2016/workshop/angular-2-forms-workshop" target="_blank">QConSF</a></p>
        <p>Find the repo for this code in <a href="https://github.com/dvidsilva/ng2forms">GitHub</a></p>
        <!--<p>A live version of this project maybe is found in 
            <a href="https://dvidsilva.github.io/ng2forms">dvidsilva.github.io/ng2forms</a></p>-->
        <p><button md-raised-button (click)="showAlert()">Click here to see an alert</button></p>
        <p><strong>This is a two way data binding with ngModel:</strong></p>
        <p>
            <md-input [(ngModel)]="welcome_message" placeholder="Welcome Message"></md-input>
        </p>
        <p>
            <label> Local variable: {{phone_number}}</label>
       </p>
       <p>
           <md-input #phone placeholder="local" (change)="setLocalVariable(phone.value)" (keyup)="setLocalVariable(phone.value)">
           </md-input>
       </p>
       </md-card>
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
  phone_number  = ``;

  showAlert() {
    alert(this.welcome_message);
  }

  setLocalVariable(val: string) {
      this.phone_number = val;
  }
}
