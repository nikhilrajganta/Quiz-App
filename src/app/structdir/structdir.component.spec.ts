import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructdirComponent } from './structdir.component';

describe('StructdirComponent', () => {
  let component: StructdirComponent;
  let fixture: ComponentFixture<StructdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructdirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
