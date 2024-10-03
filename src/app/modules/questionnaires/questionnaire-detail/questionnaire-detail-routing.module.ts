import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireDetailPage } from './questionnaire-detail.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireDetailPageRoutingModule {}
