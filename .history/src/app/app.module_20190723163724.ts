import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';

import { CretestComponent } from './cre-tests/cre-tests.component'

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    Cre
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
