import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import {TemplateFormComponent} from './forms/template-forms.component';
import {ReactiveFormComponent} from './forms/reactive-forms.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'template-forms', component: TemplateFormComponent },
      { path: 'reactive-forms', component: ReactiveFormComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
