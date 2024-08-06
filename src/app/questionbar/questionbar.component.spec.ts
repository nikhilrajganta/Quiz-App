import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionbarComponent } from './questionbar.component';

describe('QuestionbarComponent', () => {
  let component: QuestionbarComponent;
  let fixture: ComponentFixture<QuestionbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
