import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireDetailPage } from './questionnaire-detail.page';

describe('QuestionnaireDetailPage', () => {
  let component: QuestionnaireDetailPage;
  let fixture: ComponentFixture<QuestionnaireDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
