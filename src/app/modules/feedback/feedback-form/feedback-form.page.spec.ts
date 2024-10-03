import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackFormPage } from './feedback-form.page';

describe('FeedbackFormPage', () => {
  let component: FeedbackFormPage;
  let fixture: ComponentFixture<FeedbackFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
