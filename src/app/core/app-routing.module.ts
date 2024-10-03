import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../modules/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('../modules/auth/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'auth.module.ts',
    loadChildren: () => import('./modules/auth/auth.module.ts/auth.module.ts.module').then( m => m.AuthModuleTsPageModule)
  },
  {
    path: 'questionnaire-list',
    loadChildren: () => import('../modules/questionnaires/questionnaire-list/questionnaire-list.module').then( m => m.QuestionnaireListPageModule)
  },
  {
    path: 'questionnaire-list',
    loadChildren: () => import('../modules/questionnaires/questionnaire-list/questionnaire-list.module').then( m => m.QuestionnaireListPageModule)
  },
  {
    path: 'questionnaire-detail',
    loadChildren: () => import('../modules/questionnaires/questionnaire-detail/questionnaire-detail.module').then( m => m.QuestionnaireDetailPageModule)
  },
  {
    path: 'feedback-form',
    loadChildren: () => import('../modules/feedback/feedback-form/feedback-form.module').then( m => m.FeedbackFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
