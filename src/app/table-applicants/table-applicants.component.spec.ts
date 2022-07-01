import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApplicantsComponent } from './table-applicants.component';

describe('TableApplicantsComponent', () => {
  let component: TableApplicantsComponent;
  let fixture: ComponentFixture<TableApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableApplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
