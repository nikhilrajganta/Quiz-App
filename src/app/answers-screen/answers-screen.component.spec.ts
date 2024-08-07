import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersScreenComponent } from './answers-screen.component';

describe('AnswersScreenComponent', () => {
  let component: AnswersScreenComponent;
  let fixture: ComponentFixture<AnswersScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswersScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswersScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
