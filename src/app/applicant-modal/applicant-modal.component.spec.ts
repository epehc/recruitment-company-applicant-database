import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantModalComponent } from './applicant-modal.component';

describe('ApplicantModalComponent', () => {
  let component: ApplicantModalComponent;
  let fixture: ComponentFixture<ApplicantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
