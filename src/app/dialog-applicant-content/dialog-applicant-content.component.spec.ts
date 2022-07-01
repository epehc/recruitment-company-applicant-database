import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogApplicantContentComponent } from './dialog-applicant-content.component';

describe('DialogApplicantContentComponent', () => {
  let component: DialogApplicantContentComponent;
  let fixture: ComponentFixture<DialogApplicantContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogApplicantContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogApplicantContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
