import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionnaireDetailPageRoutingModule } from './questionnaire-detail-routing.module';

import { QuestionnaireDetailPage } from './questionnaire-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnaireDetailPageRoutingModule
  ],
  declarations: [QuestionnaireDetailPage]
})
export class QuestionnaireDetailPageModule {}
