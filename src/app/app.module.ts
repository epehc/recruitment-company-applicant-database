import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantModalComponent } from './applicant-modal/applicant-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogApplicantContentComponent } from './dialog-applicant-content/dialog-applicant-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { TableApplicantsComponent } from './table-applicants/table-applicants.component';
import {MatInputModule} from '@angular/material/input';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { StudiesInformationComponent } from './studies-information/studies-information.component';
import { WorkInformationComponent } from './work-information/work-information.component';



@NgModule({
  declarations: [
    AppComponent,
    ApplicantModalComponent,
    DialogApplicantContentComponent,
    TableApplicantsComponent,
    PersonalInformationComponent,
    StudiesInformationComponent,
    StudiesInformationComponent,
    WorkInformationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogApplicantContentComponent]
})
export class AppModule { }
