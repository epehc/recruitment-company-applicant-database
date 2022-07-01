import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesInformationComponent } from './studies-information.component';

describe('StudiesInformationComponent', () => {
  let component: StudiesInformationComponent;
  let fixture: ComponentFixture<StudiesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
