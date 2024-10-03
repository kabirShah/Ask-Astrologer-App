import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionnaireListPage } from './questionnaire-list.page';

describe('QuestionnaireListPage', () => {
  let component: QuestionnaireListPage;
  let fixture: ComponentFixture<QuestionnaireListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
