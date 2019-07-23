import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup } from 

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';

import { CreTestsComponent } from './cre-tests/cre-tests.component'
import { TestsComponent } from './tests/tests.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CreTestsComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
