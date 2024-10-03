import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionnaireListPageRoutingModule } from './questionnaire-list-routing.module';

import { QuestionnaireListPage } from './questionnaire-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnaireListPageRoutingModule
  ],
  declarations: [QuestionnaireListPage]
})
export class QuestionnaireListPageModule {}
