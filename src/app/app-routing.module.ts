import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { QuizComponent } from './quiz/quiz.component';
import { HelperService } from './services/helper.service';
import { QuizService } from './services/quiz.service';
import { CompanyComponent } from './company/company.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{
  path: 'tests',
  component: TestsComponent
},

{
    path: 'quiz',
    component: QuizComponent
},

{
    path: 'company',
    component: CompanyComponent
},

{
    path: 'HelperService',
    component: HelperService
},

{
    path: 'questions',
    component: QuestionsComponent
},

{
    path: 'QuizService',
    component: QuizService
},

{
    path: 'login',
    component: LoginComponent
},

{
    path: 'signup',
    component: SignupComponent
}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
