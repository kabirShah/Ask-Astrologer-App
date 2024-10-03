import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireListPage } from './questionnaire-list.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireListPageRoutingModule {}
